import { ExitIcon } from '@radix-ui/react-icons';
import { ApplicantSidebarItems } from 'components/ApplicantSidebarItems/ApplicantSidebarItems';
import { RecruiterSidebarItems } from 'components/RecruiterSidebarItems/RecruiterSidebarItems';
import { useSignOut } from 'hooks/useSignOut/useSignOut';
import Link from 'next/link';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';
import { theme } from 'styles/theme';
import { ConfigUrl } from 'utils/urls';
import { LogoFindme } from 'components/LogoFindme/LogoFindme';
import * as S from './Sidebar.styles';

export type SidebarProps = {};

export const Sidebar = ({}: SidebarProps) => {
	const { name, type } = useLoggedUserStore((state) => ({
		name: state.name,
		type: state.type,
	}));

	const { signOut } = useSignOut();

	return (
		<S.Wrapper>
			<div>
				<LogoFindme />
				<S.Items>
					{type === 'recruiter' ? (
						<RecruiterSidebarItems />
					) : (
						<ApplicantSidebarItems />
					)}
				</S.Items>
			</div>

			<S.AvatarWrapper>
				<Link href={`/${ConfigUrl}`}>
					<S.Avatar title="Ir para as configurações">
						<S.AvatarPhoto />
						<S.AvatarInfo>
							<p>{name}</p>
						</S.AvatarInfo>
					</S.Avatar>
				</Link>

				<i title="Sair">
					<ExitIcon
						color={theme.colors.lightRed}
						width={22}
						height={22}
						onClick={async () => await signOut()}
					/>
				</i>
			</S.AvatarWrapper>
		</S.Wrapper>
	);
};
