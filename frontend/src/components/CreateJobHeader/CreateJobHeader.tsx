import { Button } from 'components/Button';
import Link from 'next/link';
import { useLoggedUserStore } from 'stores/loggedUserStore';
import { CreateJobUrl } from 'utils/urls';
import * as S from './CreateJobHeader.styles';
import { UserEnum } from 'protocols/external/user/user';

export type CreateJobHeaderProps = {
	title: string;
};

export const CreateJobHeader = ({ title }: CreateJobHeaderProps) => {
	const { type } = useLoggedUserStore((state) => ({
		type: state.type,
	}));

	return (
		<S.Wrapper>
			<S.Title>{title}</S.Title>
			{type === UserEnum.RECRUITER && (
				<Link href={`/${CreateJobUrl}`}>
					<Button>Anuncie uma vaga</Button>
				</Link>
			)}
		</S.Wrapper>
	);
};
