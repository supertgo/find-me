import { AxiosResponse } from 'axios';
import {
	GetUserResponse,
	ShowUsersResponse,
} from 'protocols/external/user/user';
import { GetClient } from 'services/httpClient/get';
import {
	GetUserRouteConst,
	GetUserRouteConstProps,
	GetUsersRouteConst,
} from 'utils/routes';

export type FindUserProps = {} & GetUserRouteConstProps;

export const useUser = () => {
	const showUsers = async () => {
		const getClient = new GetClient();

		return await getClient.get<AxiosResponse<ShowUsersResponse>>({
			url: `/${GetUsersRouteConst}`,
		});
	};

	const findUser = async ({ user_id, includes }: FindUserProps) => {
		const getClient = new GetClient();

		return await getClient.get<AxiosResponse<GetUserResponse>>({
			url: `/${GetUserRouteConst({
				user_id,
				includes,
			})}`,
		});
	};

	return {
		showUsers,
		findUser,
	};
};
