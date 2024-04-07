import { ReactNode } from 'react';
import * as S from './SidebarItem.styles';

export type SidebarItemProps = {
  text: string;
  icon?: ReactNode;
  selected?: boolean;
};

export const SidebarItem = ({
  text,
  icon,
}: SidebarItemProps) => {
  return (
    <S.Wrapper>
      {icon && icon}
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
};
