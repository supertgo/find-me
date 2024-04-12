import { ReactNode } from 'react';
import * as S from './SidebarItem.styles';

export type SidebarItemProps = {
  href: string
  text: string;
  icon?: ReactNode;
  selected?: boolean;
};

export const SidebarItem = ({
  href,
  text,
  icon,
}: SidebarItemProps) => {
  return (
    <S.Wrapper href={href}>
      {icon && icon}
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};
