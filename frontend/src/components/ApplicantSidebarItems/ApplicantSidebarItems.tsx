import { MagnifyingGlassIcon, PersonIcon } from '@radix-ui/react-icons';
import { SidebarItem } from 'components/SidebarItem';
import { HomeIcon } from 'icons/HomeIcon/HomeIcon';
import { theme } from 'styles/theme';
import { ConfigUrl, HomeUrl, JobsUrl } from 'utils/urls';

export type ApplicantSidebarItemsProps = {};

export const ApplicantSidebarItems = ({}: ApplicantSidebarItemsProps) => {
	return (
		<>
			<SidebarItem
				href={`/${HomeUrl}`}
				icon={<HomeIcon />}
				text="Início"
				keyword="home"
			/>
			<SidebarItem
				href={`/${JobsUrl}`}
				icon={
					<MagnifyingGlassIcon
						width={24}
						height={24}
						color={theme.colors.officialGrey}
					/>
				}
				text="Vagas"
				keyword="job"
			/>
			<SidebarItem
				href={`/${ConfigUrl}`}
				icon={
					<PersonIcon
						width={24}
						height={24}
						color={theme.colors.officialGrey}
					/>
				}
				text="Perfil Público"
				keyword="config"
			/>
		</>
	);
};
