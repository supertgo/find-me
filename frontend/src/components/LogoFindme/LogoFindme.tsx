import * as S from './LogoFindme.styles';

export type LogoFindmeProps = {
	variant?: '' | 'secondary';
};

export const LogoFindme = ({ variant = '' }: LogoFindmeProps) => {
	return <S.LogoFindme $variant={variant}>FindMe</S.LogoFindme>;
};
