import axiosClient from '.';

interface Coffee {
	title: string;
	description: string;
	ingredients: string;
	image: string;
	id: number;
}

const getCoffee = async (): Promise<Coffee> => {
	const coffee = axiosClient.get<Coffee[]>(
		'https://api.sampleapis.com/coffee/hot',
	);
	const res = await coffee;

	console.log('coffee is called');

	const randomIdx = Math.floor(Math.random() * res.data.length);

	return res.data[randomIdx];
};

export default getCoffee;
