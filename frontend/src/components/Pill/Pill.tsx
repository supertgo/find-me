import * as S from './Pill.styles';

export type PillProps = {
	text: string;
	variant: 'success' | 'error' | 'info' | 'warning';
};

export const Pill = ({ text, variant }: PillProps) => {
	return <S.Wrapper $variant={variant}>{text}</S.Wrapper>;
};
