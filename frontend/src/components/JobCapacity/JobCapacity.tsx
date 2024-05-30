import * as S from './JobCapacity.styles';

export type JobCapacityProps = {
	applicants: number;
	applications_amount: number;
	showBottomInformation?: boolean;
};

export const JobCapacity = ({
	applicants,
	applications_amount,
	showBottomInformation = true,
}: JobCapacityProps) => {
	const progress = Math.min((applicants / applications_amount) * 100, 100);

	return (
		<>
			<S.ProgressWrapper>
				<S.ProgressDiv $progress={progress} />
			</S.ProgressWrapper>
			{showBottomInformation && (
				<S.JobMaxInfo>
					<p>{`${applicants} aplicados`}</p>
					<p>{`-`}</p>
					<p>{`Máximo ${applications_amount}`}</p>
				</S.JobMaxInfo>
			)}
		</>
	);
};
