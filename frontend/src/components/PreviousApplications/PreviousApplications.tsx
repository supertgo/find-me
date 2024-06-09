'use client'
import { PreviousApplicationsItem } from 'components/PreviousApplicationsItem';
import { Children } from 'react';
import { useLoggedUserStore } from 'stores/loggedUserStore';
import { filterJobLocation } from 'utils/job';
import { LoadingPreviousApplication, usePreviousApplications } from '.';
import * as S from './PreviousApplications.styles';

export type PreviousApplicationsProps = {
	title: string;
};

export const PreviousApplications = ({ title }: PreviousApplicationsProps) => {
	const { userId } = useLoggedUserStore((state) => ({
		userId: state.id,
	}));

	const { data, isLoading } = usePreviousApplications({ userId });
	const applications = data?.data.slice(-3);

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
