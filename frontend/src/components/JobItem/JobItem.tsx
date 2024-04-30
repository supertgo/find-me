import { Button } from 'components/Button/Button';
import * as S from './JobItem.styles';
import { Pill } from 'components/Pill/Pill';
import { MediaMatch } from 'components/MediaMatch/MediaMatch';
import { DropboxIcon } from 'icons/DropboxIcon/DropboxIcon';
import { Job } from 'protocols/external/job/job';
import {
  filterJobLocation,
  translateEmploymentType,
  translateSalaryTimeUnit,
  translateWorkModel,
} from 'utils/job';
import { formatInputCurrency } from 'utils/money';

export type JobItemProps = {} & Job;

export const JobItem = ({
  name,
  is_available,
  applications_amount,
  salary,
  salary_time_unit,
  employment_type,
  work_model,
  location,
}: JobItemProps) => {
  const applicants = Math.floor(Math.random() * applications_amount);

  return (
    <S.Wrapper>
      <S.JobInfoWrapper>
        <DropboxIcon />
        <S.JobInfo>
          <p>{name}</p>
          <S.JobLocationInfo>{filterJobLocation(location)}</S.JobLocationInfo>
          <MediaMatch $greaterThan="large">
            <S.PillWrapper>
              <Pill text={translateEmploymentType[employment_type]} />
              <Pill text={translateWorkModel[work_model]} />
              <Pill
                text={`${formatInputCurrency(salary)}/${
                  translateSalaryTimeUnit[salary_time_unit]
                }`}
              />
            </S.PillWrapper>
          </MediaMatch>
        </S.JobInfo>
      </S.JobInfoWrapper>
      <S.PillSmallScreen>
        <Pill text={translateEmploymentType[employment_type]} />
        <Pill text={translateWorkModel[work_model]} />
        <Pill
          text={`${formatInputCurrency(salary)}/${
            translateSalaryTimeUnit[salary_time_unit]
          }`}
        />
      </S.PillSmallScreen>
      <S.JobApplicationInfo>
        <Button disabled={!is_available}>Aplicar</Button>
        <S.ProgressWrapper>
          <S.ProgressDiv $progress={(applicants / applications_amount) * 100} />
        </S.ProgressWrapper>
        <S.JobMaxInfo>
          <p>{`${applicants} aplicados`}</p>
          <p>{`-`}</p>
          <p>{`Máximo ${applications_amount}`}</p>
        </S.JobMaxInfo>
      </S.JobApplicationInfo>
    </S.Wrapper>
  );
};
