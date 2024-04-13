import { Button } from 'components/Button/Button';
import * as S from './JobItem.styles';
import { Pill } from 'components/Pill/Pill';
import { MediaMatch } from 'components/MediaMatch/MediaMatch';
import { DropboxIcon } from 'icons/DropboxIcon/DropboxIcon';

export type JobItemProps = {};

export const JobItem = ({}: JobItemProps) => {
  return (
    <S.Wrapper>
      <S.JobInfoWrapper>
        <DropboxIcon />
        <S.JobInfo>
          <p>Assiste de Redes Sociais</p>
          <S.JobLocationInfo>
            {`Nomad`} &bull; {`Paris, France`}
          </S.JobLocationInfo>
          <MediaMatch $greaterThan="large">
            <S.PillWrapper>
              <Pill text="Tempo Integral" />
              <Pill text="Marketing" />
              <Pill text="Design" />
            </S.PillWrapper>
          </MediaMatch>
        </S.JobInfo>
      </S.JobInfoWrapper>
      <S.PillSmallScreen>
        <Pill text="Tempo Integral" />
        <Pill text="Tempo Integral" />
        <Pill text="Tempo Integral" />
      </S.PillSmallScreen>
      <S.JobApplicationInfo>
        <Button>Aplicar</Button>
        <S.ProgressWrapper>
          <S.ProgressDiv $progress={(5 / 10) * 100} />
        </S.ProgressWrapper>
        <S.JobMaxInfo>
          <p>{`5 aplicados`}</p>
          <p>{`-`}</p>
          <p>{`Máximo 10`}</p>
        </S.JobMaxInfo>
      </S.JobApplicationInfo>
    </S.Wrapper>
  );
};
