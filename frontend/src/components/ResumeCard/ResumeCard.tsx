import { ReactNode } from 'react';
import * as S from './ResumeCard.styles';
import { Pencil1Icon } from '@radix-ui/react-icons';

export type ResumeCardProps = {
	text: string;
	modalTitle: string;
	children: ReactNode;
	addModal?: ReactNode;
};

export const ResumeCard = ({ text, children, addModal }: ResumeCardProps) => {

	return (
		<S.Wrapper>
			<S.TopInfo>
				<span>{text}</span>
				<S.IconsWrapper>
          {addModal}
					<Pencil1Icon aria-label="Editar" />
				</S.IconsWrapper>
			</S.TopInfo>

			<S.ChildrenWrapper>{children}</S.ChildrenWrapper>
		</S.Wrapper>
	);
};
