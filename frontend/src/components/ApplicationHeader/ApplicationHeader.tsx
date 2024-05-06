import Image from 'next/image';
import { Button } from 'components/Button/Button';

import * as S from './ApplicationHeader.styles';

export type ApplicationHeaderProps = {};

export const ApplicationHeader = ({}: ApplicationHeaderProps) => {
  return (
    <S.Header>
      <S.CompanyWrapper>
        <Image
          src={`https://source.unsplash.com/random/?company_logo`}
          width="48"
          height="48"
          alt={`company avatar`}
          style={{
            borderRadius: '50%',
          }}
          loading="lazy"
          quality={100}
        />
        <S.CompanyTextsWrapper>
          <span>Empresa</span>
          <p>Onfly</p>
        </S.CompanyTextsWrapper>
      </S.CompanyWrapper>
      <Button>Anuncie uma vaga</Button>
    </S.Header>
  );
};
