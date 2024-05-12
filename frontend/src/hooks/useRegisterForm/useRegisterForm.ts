import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import {
  Control,
  useForm,
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';
import { PostClient } from 'services/httpClient/post';
import {
  UserAuthRegister,
  UserProps,
  UserType,
} from 'protocols/external/user/user';
import { PostAuthRegisterRouteConst } from 'utils/routes';

export type RegisterInputs = {
  name: string;
  email: string;
  phone: string;
  password: string;
  type: string;
};

export type UseRegisterFormProtocols = {
  register: UseFormRegister<any>;
  handleSubmit: UseFormHandleSubmit<any>;
  errors: FieldErrors<RegisterInputs>;
  onSubmit: SubmitHandler<RegisterInputs>;
  control: Control<RegisterInputs>;
  isLoading: boolean;
  isValid: boolean;
};

export const useRegisterForm = (): UseRegisterFormProtocols => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<RegisterInputs>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<RegisterInputs> = async (data, event) => {
    event?.preventDefault();

    setIsLoading(true);

    const postClient = new PostClient();

    const registerBody: UserAuthRegister = {
      name: data.name,
      password: data.password,
      email: data.email,
      phone: data.phone,
      type: data.type ? 'recruiter' : 'employee',
    };

    try {
      const response = await postClient.post({
        url: `/${PostAuthRegisterRouteConst}`,
        body: {
          ...registerBody,
        },
      });

      await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: true,
        callbackUrl: '/home',
      });

      toast.success(response.data.message);
    } catch (error) {
      if (error instanceof Error) {
        return toast.error(error.response.data.message);
      }

      return toast.error('Ocorreu um erro, tente novamente!');
    }

    setIsLoading(false);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    control,
    isValid,
    isLoading,
  };
};
