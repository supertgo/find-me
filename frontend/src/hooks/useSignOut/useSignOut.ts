import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { PostAuthLogOutRouteConst } from 'utils/routes';
import { useQueryClient } from '@tanstack/react-query';
import { signOut as NextAuthSignOut } from 'next-auth/react';
import { ERROR_LOGOUT } from 'errors';
import { PostClient } from 'services/httpClient/post';

export type UseSignOutProtocols = {
  signOut(): Promise<void>;
};

export const useSignOut = (): UseSignOutProtocols => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const signOut = async () => {
    const postClient = new PostClient();
    try {
      await postClient.post({
        url: `/${PostAuthLogOutRouteConst}`,
      });

      await NextAuthSignOut({
        redirect: false,
      });

      sessionStorage.clear();
      queryClient.clear();
      localStorage.clear();
      router.replace(`/`);
    } catch (e) {
      toast.error(ERROR_LOGOUT);
    }
  };

  return {
    signOut,
  };
};
