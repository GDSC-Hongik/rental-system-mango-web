import axiosClient from '.';

interface rentPostRes {
	rentalId: number;
	itemId: number;
	rentalStatus: string;
	requestDateTime: Date;
	deadlineDateTime: Date;
}
interface rentReq {
	itemId: number;
}
interface rentGetRes {
	rentalId: number;
	studentId: string;
	itemId: number;
	rentalStatus: string;
	requestDateTime: Date;
	borrowDateTime: Date;
	returnDateTime?: Date;
	deadlineDateTime: Date;
	rentalReview?: number;
}
const rentRequstAPI = async ({ itemId }: rentReq): Promise<rentPostRes> => {
	const req: rentReq = { itemId: itemId };
	const res = await axiosClient.post<rentPostRes>('/rental', req);

	console.log('rent start');
	return res.data;
};

const rentRequstAllAPI = async (): Promise<rentGetRes[]> => {
	const res = await axiosClient.get<rentGetRes[]>('/rental');

	console.log('rent Query ended');
	return res.data;
};
const myRentRequstAPI = async (): Promise<rentGetRes[]> => {
	const res = await axiosClient.get<rentGetRes[]>('/rental/myrental');

	console.log('rent my Query ended');
	return res.data;
};

// interface StatusReq {
// 	Status:
// 		| 'APPROVAL_REQUESTED'
// 		| 'CANCELED'
// 		| 'APPROVED'
// 		| 'REJECTED'
// 		| 'BORROW'
// 		| 'OVERDUE'
// 		| 'RETURN_REQUESTED'
// 		| 'RETURN';
// 		rentalId: number;
// }
// const rentStatusAPI = async ({ Status, rentalId }: StatusReq) => {
// 	const res = await axiosClient.patch<rentGetRes[]>('/rental', {params: {
// 		rentalId: rentalId
// 	}});

// 	console.log('rent my Query ended');
// 	return res.data;
// };

export { rentRequstAPI, rentRequstAllAPI, myRentRequstAPI };
