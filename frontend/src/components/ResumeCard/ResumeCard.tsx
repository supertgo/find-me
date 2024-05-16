import { ReactNode } from 'react';
import * as S from './ResumeCard.styles';
import { Pencil1Icon, PlusIcon } from '@radix-ui/react-icons';

export type ResumeCardProps = {
	text: string;
	modalTitle: string;
	children: ReactNode;
};

export const ResumeCard = ({ text, children }: ResumeCardProps) => {
	return (
		<S.Wrapper>
			<S.TopInfo>
				<span>{text}</span>
				<S.IconsWrapper>
					<PlusIcon />
					<Pencil1Icon aria-lable="Editar" />
				</S.IconsWrapper>
			</S.TopInfo>

			<S.ChildrenWrapper>{children}</S.ChildrenWrapper>
		</S.Wrapper>
	);
};
