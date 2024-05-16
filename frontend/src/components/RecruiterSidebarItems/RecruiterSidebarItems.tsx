import { ApplicantsUrl, HomeUrl } from 'utils/urls';
import { HomeIcon } from 'icons/HomeIcon/HomeIcon';
import { SidebarItem } from 'components/SidebarItem/SidebarItem';
import {
	PersonIcon,
} from '@radix-ui/react-icons';
import { theme } from 'styles/theme';

export type RecruiterSidebarItemsProps = {};

export const RecruiterSidebarItems = ({}: RecruiterSidebarItemsProps) => {
	return (
		<>
			<SidebarItem href={`/${HomeUrl}`} icon={<HomeIcon />} text="Início" />
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
