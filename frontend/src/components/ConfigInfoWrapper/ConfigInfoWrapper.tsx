import { ReactNode } from 'react';
import * as S from './ConfigInfoWrapper.styles';

export type ConfigInfoWrapperProps = {
	title: string;
	description?: string;
	children: ReactNode;
	hasBorder?: boolean;
};

export const ConfigInfoWrapper = ({
	title,
	description,
	children,
	hasBorder = true,
}: ConfigInfoWrapperProps) => {
	return (
		<S.Wrapper $hasBorder={hasBorder}>
			<S.LeftContent>
				<S.Title>{title}</S.Title>
				{!!description && <S.Description>{description}</S.Description>}
			</S.LeftContent>
			<S.RightContent>{children}</S.RightContent>
		</S.Wrapper>
	);
};
