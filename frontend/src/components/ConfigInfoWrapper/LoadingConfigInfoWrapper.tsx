import { Skeleton } from 'components/Skeleton/Skeleton';
import * as S from './ConfigInfoWrapper.styles';

export const LoadingConfigInfoWrapper = () => {
	return (
		<S.Wrapper>
				<Skeleton
					style={{
						height: '3rem',
					}}
				/>
			<S.LeftContent>
				<Skeleton
					style={{
						height: '3rem',
					}}
				/>
			</S.LeftContent>
			<S.RightContent>
				<Skeleton
					style={{
						height: '5rem',
					}}
				/>
				<Skeleton
					style={{
						height: '5rem',
					}}
				/>
			</S.RightContent>
		</S.Wrapper>
	);
};
