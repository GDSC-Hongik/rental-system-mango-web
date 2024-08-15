import axiosClient from '.';

interface memberInfoReq {
	studentId: number;
}
interface memberInfoRes {
	studentId: string;
	name: string;
	departmentName: string;
	phone: string;
	absenceStatus: boolean;
	rentalBannedDate?: Date;
}
const memberInfoAPI = async ({
	studentId,
}: memberInfoReq): Promise<memberInfoRes> => {
	const res = await axiosClient.get<memberInfoRes>('/member', {
		params: { studentId: studentId },
	});

	return res.data;
};

export { memberInfoAPI };
