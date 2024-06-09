import { ExitIcon } from '@radix-ui/react-icons';
import { ApplicantSidebarItems } from 'components/ApplicantSidebarItems';
import { LogoFindme } from 'components/LogoFindme';
import { RecruiterSidebarItems } from 'components/RecruiterSidebarItems';
import Link from 'next/link';
import { UserEnum } from 'protocols/external/user/user';
import { useLoggedUserStore } from 'stores/loggedUserStore';
import { theme } from 'styles/theme';
import { ConfigUrl } from 'utils/urls';
import { useSignOut } from '.';
import { Avatar } from 'components/Avatar';
import * as S from './Sidebar.styles';

export type SidebarProps = {};

export const Sidebar = ({}: SidebarProps) => {
	const { name, type } = useLoggedUserStore((state) => ({
		name: state.name,
		type: state.type,
	}));

	const { signOut } = useSignOut();

	return (
		<S.Wrapper data-cy="sidebar">
			<div>
				<LogoFindme />
				<S.Items>
					{type === UserEnum.RECRUITER ? (
						<RecruiterSidebarItems />
					) : (
						<ApplicantSidebarItems />
					)}
				</S.Items>
			</div>

			<S.AvatarWrapper>
				<Link
					href={`/${ConfigUrl}`}
					style={{
						textDecoration: 'none',
					}}
				>
					<Avatar showOnlyFirstName user={name} />
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
