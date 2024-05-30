import { Children } from 'react';
import * as S from './PreviousApplications.styles';
import { PreviousApplicationsItem, PreviousApplicationsItemProps } from 'components/PreviousApplicationsItem';

export type PreviousApplicationsProps = {
  title: string;
  applications: PreviousApplicationsItemProps[];
};

export const PreviousApplications = ({
  title,
  applications,
}: PreviousApplicationsProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Applications>
        {Children.toArray(
          applications.map((item, key) => {
            const isEven = (key + 1) % 2 === 0;
            return <PreviousApplicationsItem white={isEven} {...item} />;
          }),
        )}
      </S.Applications>
    </S.Wrapper>
  );
};
