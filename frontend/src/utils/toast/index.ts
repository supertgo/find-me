import { toast } from 'react-toastify';

export interface IToast {
	success(message: string): void;
	error(message: string): void;
}

export class Toast implements IToast {
	static success(message: string) {
		toast.success(message);
	}

	static error(message: string) {
		toast.error(message);
	}
}
