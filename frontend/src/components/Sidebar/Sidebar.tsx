import { SidebarItem } from 'components/SidebarItem/SidebarItem';
import * as S from './Sidebar.styles';
import { HomeIcon } from 'icons/HomeIcon/HomeIcon';
import { useLoggedUserStore } from 'stores/loggedUserStore';
import { Button } from 'components/Button/Button';
import { useSignOut } from 'hooks/useSignOut/useSignOut';
import Link from 'next/link';
import { ApplicantsUrl, ConfigUrl, HomeUrl, JobsUrl } from 'utils/urls';

export type SidebarProps = {};

export const Sidebar = ({}: SidebarProps) => {
	const { name, email, type } = useLoggedUserStore((state) => ({
		name: state.name,
		email: state.email,
		type: state.type,
	}));

	const { signOut } = useSignOut();

	return (
		<S.Wrapper>
			{/* Colocar componente de logo aqui */}
			<S.Items>
				{type === 'recruiter' ? (
					<>
						<SidebarItem
							href={`/${HomeUrl}`}
							icon={<HomeIcon />}
							text="Início"
						/>
						<SidebarItem
							href={`/${ApplicantsUrl}`}
							icon={<HomeIcon />}
							text="Candidatos"
						/>
						<SidebarItem
							href={`/${JobsUrl}`}
							icon={<HomeIcon />}
							text="Vagas"
						/>
					</>
				) : (
					<>
						<SidebarItem
							href={`/${ApplicantsUrl}`}
							icon={<HomeIcon />}
							text="Candidatos"
						/>
						<SidebarItem href="/" icon={<HomeIcon />} text="Candidaturas" />
						<SidebarItem
							href={`/${JobsUrl}`}
							icon={<HomeIcon />}
							text="Vagas"
						/>
					</>
				)}
			</S.Items>

			<div>
				<Link href={`/${ConfigUrl}`}>
					<S.Avatar>
						<S.AvatarPhoto />
						<S.AvatarInfo>
							<p>{name}</p>
							<span>{email}</span>
						</S.AvatarInfo>
					</S.Avatar>
				</Link>
				<Button onClick={async () => await signOut()}>Sair</Button>
			</div>
		</S.Wrapper>
	);
};
