import { ApplicantsUrl, HomeUrl, JobsUrl } from 'utils/urls';
import { HomeIcon } from 'icons/HomeIcon/HomeIcon';
import { SidebarItem } from 'components/SidebarItem/SidebarItem';
import {
	PersonIcon,
  MagnifyingGlassIcon
} from '@radix-ui/react-icons';
import { theme } from 'styles/theme';

export type RecruiterSidebarItemsProps = {};

export const RecruiterSidebarItems = ({}: RecruiterSidebarItemsProps) => {
	return (
		<>
			<SidebarItem href={`/${HomeUrl}`} icon={<HomeIcon />} text="Início" />
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
			/>
			<SidebarItem
				href={`/${ApplicantsUrl}`}
				icon={
					<PersonIcon
						width={24}
						height={24}
						color={theme.colors.officialGrey}
					/>
				}
				text="Candidatos"
			/>
		</>
	);
};
