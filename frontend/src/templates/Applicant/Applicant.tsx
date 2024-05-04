'use client';
import Image from 'next/image';
import { Base } from 'components/Base/Base';
import { Title } from 'components/Title/Title';
import { UserProps } from 'protocols/external/user/user';

import * as S from './Applicant.styles';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { yearsMonthsSinceNow } from 'utils/date';
import { ApplicationHeader } from 'components/ApplicationHeader/ApplicationHeader';

export type ApplicantProps = {
  user: UserProps;
};

export const Applicant = ({ user }: ApplicantProps) => {
  const currentJob = user.professional_experiences?.find(
    (job) => job.is_current === 1,
  );

  const academicRecords = user.academic_records;

  return (
    <Base>
      <ApplicationHeader />
      <Title title="Detalhes do Candidato" />
      <S.Wrapper>
        <S.LeftContent>
          <S.Avatar>
            <Image
              src={`https://source.unsplash.com/random/?avatar&${user.id}`}
              width="96"
              height="96"
              alt={`${user.name} avatar`}
              style={{
                borderRadius: '50%',
              }}
              loading="lazy"
              quality={100}
            />
            <S.AvatarTextContainer>
              <h5>{user.name}</h5>
              <p>Designer de Produtos</p>
            </S.AvatarTextContainer>
          </S.Avatar>
          <S.Contact>
            <h5>Contato</h5>
            <S.ContactItem>
              <EnvelopeClosedIcon />
              <S.ContactTextContainer>
                <h6>E-mail</h6>
                <p>{user.email}</p>
              </S.ContactTextContainer>
            </S.ContactItem>
            <S.ContactItem>
              <EnvelopeClosedIcon />
              <S.ContactTextContainer>
                <h6>Celular</h6>
                <p>{user.phone}</p>
              </S.ContactTextContainer>
            </S.ContactItem>
          </S.Contact>
        </S.LeftContent>
        <S.RightContent>
          <S.PersonalInformationTitle>
            Informações Pessoais
          </S.PersonalInformationTitle>
          <S.PersonalInformationContainer>
            <S.PersonalInformationItem>
              <S.PersonalInformationItemTitle>
                Nome Completo
              </S.PersonalInformationItemTitle>
              <S.PersonalInformationItemText>
                {user.name}
              </S.PersonalInformationItemText>
            </S.PersonalInformationItem>

            <S.PersonalInformationItem>
              <S.PersonalInformationItemTitle>
                Nome Completo
              </S.PersonalInformationItemTitle>
              <S.PersonalInformationItemText>
                {user.name}
              </S.PersonalInformationItemText>
            </S.PersonalInformationItem>
          </S.PersonalInformationContainer>

          <S.PersonalInformationItem>
            <S.PersonalInformationItemTitle>
              Sobre mim
            </S.PersonalInformationItemTitle>
            <S.PersonalInformationItemText>
              {user.about_me && user.about_me}
            </S.PersonalInformationItemText>
          </S.PersonalInformationItem>

          <S.PersonalInformationContainer>
            <S.PersonalInformationItem>
              <S.PersonalInformationItemTitle>
                Emprego Atual
              </S.PersonalInformationItemTitle>
              <S.PersonalInformationItemText>
                {currentJob?.position || 'Desempregado'}
              </S.PersonalInformationItemText>
            </S.PersonalInformationItem>

            {currentJob && (
              <S.PersonalInformationItem>
                <S.PersonalInformationItemTitle>
                  Tempo de Experiência
                </S.PersonalInformationItemTitle>
                <S.PersonalInformationItemText>
                  {`${yearsMonthsSinceNow(currentJob.start_date).years} ano(s) e ${yearsMonthsSinceNow(currentJob.start_date).months } meses`}
                </S.PersonalInformationItemText>
              </S.PersonalInformationItem>
            )}

            {academicRecords?.map((acad) => (
              <>
                <S.PersonalInformationItem>
                  <S.PersonalInformationItemTitle>
                    Qualificação Acadêmica
                  </S.PersonalInformationItemTitle>
                  <S.PersonalInformationItemText>
                    {acad.institution}
                  </S.PersonalInformationItemText>
                </S.PersonalInformationItem>

                <S.PersonalInformationItem>
                  <S.PersonalInformationItemTitle>
                    Área de Estudo
                  </S.PersonalInformationItemTitle>
                  <S.PersonalInformationItemText>
                    {acad.field_of_study}
                  </S.PersonalInformationItemText>
                </S.PersonalInformationItem>
              </>
            ))}
          </S.PersonalInformationContainer>
        </S.RightContent>
      </S.Wrapper>
    </Base>
  );
};
