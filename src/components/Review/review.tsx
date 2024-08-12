import { useState } from 'react';
import { css } from '@emotion/react';
import { palette } from '../../styles/palette';
import { typo } from '../../styles/typo';

const RATINGS = [1, 2, 3, 4, 5];

interface StarProps {
	selected?: boolean;
	onClick?: () => void;
}

const Star = ({ selected = false, onClick }: StarProps) => {
	const className = `rating-star ${selected ? 'selected' : ''}`;
	return (
		<svg
			className={className}
			onClick={onClick}
			css={css`
				width: 55px;
				height: 55px;
				margin: 0 5px;
				cursor: pointer;
				fill: ${selected ? palette.main_color : 'rgba(24, 0, 207, 0.15)'};
				};
			`}
			viewBox='0 0 41 39'>
			<path d='M17.6468 2.78115C18.5449 0.0172219 22.4551 0.0172219 23.3532 2.78115L26.0006 10.9291C26.4022 12.1652 27.5541 13.002 28.8538 13.002H37.421C40.3272 13.002 41.5355 16.7209 39.1844 18.4291L32.2533 23.4648C31.2019 24.2287 30.7619 25.5828 31.1635 26.8189L33.8109 34.9668C34.709 37.7307 31.5455 40.0291 29.1944 38.3209L22.2634 33.2852C21.2119 32.5213 19.7881 32.5213 18.7366 33.2852L11.8056 38.3209C9.45446 40.0291 6.29102 37.7307 7.18908 34.9668L9.8365 26.8189C10.2381 25.5828 9.79815 24.2287 8.74668 23.4648L1.81564 18.4291C-0.5355 16.7209 0.672826 13.002 3.579 13.002H12.1462C13.4459 13.002 14.5978 12.1652 14.9994 10.9291L17.6468 2.78115Z' />
		</svg>
	);
};

interface ConfirmButtonProps {
	onClick: () => void;
	children: React.ReactNode;
}

const ConfirmButton = ({ onClick, children }: ConfirmButtonProps) => (
	<button
		className='confirm-button'
		onClick={onClick}
		css={css`
			width: 88px;
			height: 38px;
			background-color: ${palette.blue};
			border-radius: 5px;
			border: none;

			position: relative;
			margin-top: 30px;
			cursor: pointer;

			line-height: 38px;
			color: ${palette.white};
			${typo.I_Text_15_B};
			font-style: normal;
			text-align: center;
		`}>
		{children}
	</button>
);

interface RatingProps {
	value?: number;
	onConfirm: (rating: number) => void;
	onClose: () => void;
}

const Rating = ({ value = 0, onConfirm, onClose }: RatingProps) => {
	const [rating, setRating] = useState(value);

	return (
		<div
			css={css`
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				z-index: 1000;
			`}>
			<div
				className='rating-container'
				css={css`
					background-color: ${palette.white};
					width: 326px;
					height: 280px;
					padding: 20px;
					flex-shrink: 0;
					border-radius: 20px;
					text-align: center;
					z-index: 1;
				`}>
				<div
					className='rating-title'
					css={css`
						${typo.I_Text_20_B}
						color: ${palette.dark_color};
						text-align: center;
						font-style: normal;
						margin-top: 20px;
						margin-bottom: 10px;
					`}>
					반납되었습니다!
				</div>
				<div
					className='rating-subtitle'
					css={css`
						${typo.I_Text_10_L}
						color: ${palette.dark_color};
						text-align: center;
						font-style: normal;
						margin-bottom: 5px;
					`}>
					리뷰를 남겨주세요!
				</div>
				<div
					className='rating-subtitle'
					css={css`
						${typo.I_Text_10_L}
						color: ${palette.dark_color};
						text-align: center;
						font-style: normal;
						margin-bottom: 25px;
					`}>
					불편했던 점이 있으면 문의로 남겨주세요!
				</div>
				<div
					className='rating-stars'
					css={css`
						display: inline-flex;
						justify-content: center;
						margin-bottom: 30px;
					`}>
					{RATINGS.map((ratingValue) => (
						<Star
							key={ratingValue}
							selected={rating >= ratingValue}
							onClick={() => {
								setRating(ratingValue);
							}}
						/>
					))}
				</div>
				<ConfirmButton
					onClick={() => {
						onConfirm(rating);
						onClose();
					}}>
					확인
				</ConfirmButton>
			</div>
		</div>
	);
};

export default Rating;
