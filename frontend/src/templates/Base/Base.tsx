import { Container } from 'components/Container';
import { Sidebar } from 'components/Sidebar';
import { ReactNode } from 'react';
import * as S from './Base.styles';

export type BaseProps = {
	children: ReactNode;
	showSidebar?: boolean;
};

export const Base = ({ children, showSidebar = true }: BaseProps) => {
	return (
		<S.Wrapper $showSidebar={showSidebar}>
			<Container>
				<S.ContentWrapper>
					{showSidebar && <Sidebar />}
					<S.ChildrenWrapper>{children}</S.ChildrenWrapper>
				</S.ContentWrapper>
			</Container>
		</S.Wrapper>
	);
};
