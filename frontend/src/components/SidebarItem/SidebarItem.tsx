import { ReactNode } from 'react';
import * as S from './SidebarItem.styles';
import { usePathname } from 'next/navigation';

export type SidebarItemProps = {
	href: string;
	text: string;
	icon?: ReactNode;
	keyword: string;
};

export const SidebarItem = ({
	href,
	text,
	icon,
	keyword,
}: SidebarItemProps) => {
	const pathname = usePathname();
	const selected = pathname.includes(keyword);
	return (
		<S.LateralBar $selected={selected}>
			<S.Wrapper href={href} $selected={selected}>
				{icon && icon}
				<S.Text>{text}</S.Text>
			</S.Wrapper>
		</S.LateralBar>
	);
};
