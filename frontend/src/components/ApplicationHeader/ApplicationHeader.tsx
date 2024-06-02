import { Button } from 'components/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';
import { CreateJobUrl } from 'utils/urls';
import * as S from './ApplicationHeader.styles';
import { UserEnum } from 'protocols/external/user/user';

export type ApplicationHeaderProps = {};

export const ApplicationHeader = ({}: ApplicationHeaderProps) => {
	const { type } = useLoggedUserStore((state) => ({
		type: state.type,
	}));

	return (
		<S.Header>
			<S.CompanyWrapper>
				<Image
					src={`https://source.unsplash.com/random/?company_logo`}
					width="48"
					height="48"
					alt={`company avatar`}
					style={{
						borderRadius: '50%',
					}}
					loading="lazy"
					quality={100}
				/>
				<S.CompanyTextsWrapper>
					<span>Empresa</span>
					<p>Onfly</p>
				</S.CompanyTextsWrapper>
			</S.CompanyWrapper>

			{type === UserEnum.RECRUITER && (
				<Link href={`/${CreateJobUrl}`}>
					<Button>Anuncie uma vaga</Button>
				</Link>
			)}
		</S.Header>
	);
};
