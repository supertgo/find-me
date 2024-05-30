'use client';
import { ReactNode } from 'react';
import * as S from './Auth.styles';
import { LogoFindme } from 'components/LogoFindme/LogoFindme';
import Image from 'next/image';
type AuthProps = {
	children: ReactNode;
};

export const Auth = ({ children }: AuthProps) => {
	return (
		<S.Wrapper>
			<S.LeftSide>
				<S.LeftSideContent>
					<LogoFindme variant="secondary" />
					<S.LogoImage
						as={Image}
						src="logo.svg"
						width="356"
						height="284"
						alt="Logo"
					/>
					<S.Description>
						<S.Copy>Está duro? Chame o Findme para te ajudar!</S.Copy>
						<S.BottomText>
							A melhor plataforma para você encontrar seu novo trampo
						</S.BottomText>
					</S.Description>
				</S.LeftSideContent>
			</S.LeftSide>
			<S.RightSide>{children}</S.RightSide>
		</S.Wrapper>
	);
};
