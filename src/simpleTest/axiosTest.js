import axios from 'axios';
import console from 'console';

// npx node axiosTest.js
// => Latte

// test 이므로 eslint 경고 무시

const test = async () => {
	const res = await axios.get('https://api.sampleapis.com/coffee/hot');

	console.log(res.data[0].title);
};

await test();
