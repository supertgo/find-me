import { Pencil1Icon, PlusIcon } from '@radix-ui/react-icons';
import { Skeleton } from 'components/Skeleton/Skeleton';
import * as S from './ResumeCard.styles';

export const LoadingResumeCard = () => {
	return (
		<S.Wrapper>
			<S.TopInfo>
				<Skeleton
					style={{
						height: '2rem',
					}}
				/>
				<S.IconsWrapper>
					<PlusIcon />
					<Pencil1Icon aria-label="Editar" />
				</S.IconsWrapper>
			</S.TopInfo>
		</S.Wrapper>
	);
};
