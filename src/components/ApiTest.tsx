import getCoffee from '@apis/testApi';
import { useQuery } from '@tanstack/react-query';

const ApiTestCompoent = () => {
	const data = useQuery({
		queryKey: ['coffee'],
		queryFn: getCoffee,
	});

	if (data.isLoading) {
		return <div>loading...</div>;
	}

	if (data.isError) {
		return <div>error: {data.error.message}</div>;
	}

	return (
		<div>
			<h1>{data.data?.title}</h1>
			<div>{data.data?.description}</div>
			<div>{data.data?.ingredients}</div>
			<img src={data.data?.image} />
		</div>
	);
};

export default ApiTestCompoent;
