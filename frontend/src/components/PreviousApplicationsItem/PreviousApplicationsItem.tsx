import * as S from './PreviousApplicationsItem.styles';

export type PreviousApplicationsItemProps = {
  white?: boolean;
  jobTitle: string;
  company: string;
  location: string;
  workModel: string;
  isAvaliable: boolean;
};

export const PreviousApplicationsItem = ({
  white,
  jobTitle,
  company,
  location,
  workModel,
}: PreviousApplicationsItemProps) => {
  return (
    <S.Wrapper $white={white}>
      <S.JobWrapper>
        oi
        <div>
          <S.JobTitle>{jobTitle}</S.JobTitle>
          <S.JobInfo>{`${company} . ${location} . ${workModel}`}</S.JobInfo>
        </div>
      </S.JobWrapper>
      <S.DateInfo>
        <p>Data Candidatura</p>
        <span>24 Julho 2024</span>
      </S.DateInfo>
      <S.Status>Em Análise</S.Status>
      <S.Status>oi</S.Status>
    </S.Wrapper>
  );
};
