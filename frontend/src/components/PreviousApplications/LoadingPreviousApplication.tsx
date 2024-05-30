import { Skeleton } from 'components/Skeleton';

export const LoadingPreviousApplication = () => {
	return (
		<>
			<Skeleton style={{ height: '10rem' }} />
			<Skeleton style={{ height: '10rem' }} />
			<Skeleton style={{ height: '10rem' }} />
		</>
	);
};
