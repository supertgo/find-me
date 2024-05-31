import { Children } from 'react';
import * as S from './PreviousApplications.styles';
import { PreviousApplicationsItem } from 'components/PreviousApplicationsItem';
import { usePreviousApplications } from 'hooks/usePreviousApplications/usePreviousApplications';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';
import { filterJobLocation } from 'utils/job';
import { LoadingPreviousApplication } from '.';

export type PreviousApplicationsProps = {
	title: string;
};

export const PreviousApplications = ({ title }: PreviousApplicationsProps) => {
	const { userId } = useLoggedUserStore((state) => ({
		userId: state.id,
	}));

	const { data, isLoading } = usePreviousApplications({ userId });
	const applications = data?.data;
	return (
		<S.Wrapper>
			<S.Title>{title}</S.Title>
			<S.Applications>
				{isLoading ? (
					<LoadingPreviousApplication />
				) : (
					Children.toArray(
						applications?.map((item, key) => {
							const isEven = (key + 1) % 2 === 0;
							const { name, location, work_model, is_available, id } =
								item.job!;

							return (
								<PreviousApplicationsItem
									jobTitle={name}
									company={'Google'}
									location={filterJobLocation(location)}
									workModel={work_model}
									isAvaliable={!!is_available}
									white={isEven}
									id={id}
								/>
							);
						}),
					)
				)}
			</S.Applications>
		</S.Wrapper>
	);
};
