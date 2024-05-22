import { Button } from 'components/Button/Button';
import { JobCapacity } from 'components/JobCapacity/JobCapacity';
import { MediaMatch } from 'components/MediaMatch/MediaMatch';
import Image from 'next/image';
import Link from 'next/link';
import { Job } from 'protocols/external/job/job';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';
import { filterJobLocation } from 'utils/job';
import { JobUrl } from 'utils/urls';
import * as S from './JobItem.styles';
import { JobPill, JobPillProps } from './JobPill';

export type JobItemProps = {} & Job;

export const JobItem = ({
	id,
	name,
	is_available,
	applications_amount,
	salary,
	salary_time_unit,
	employment_type,
	work_model,
	location,
}: JobItemProps) => {
	const applicants = Math.floor(Math.random() * applications_amount);

	const jobPillProps: JobPillProps = {
		employment_type,
		work_model,
		salary,
		salary_time_unit,
	};

	const { type } = useLoggedUserStore((state) => ({
		type: state.type,
	}));

	return (
		<S.Wrapper>
			<S.JobInfoWrapper>
				<Image
					src={`https://source.unsplash.com/random/?company_logo&${applicants}`}
					width="64"
					height="64"
					alt={`company avatar`}
					style={{
						borderRadius: '50%',
					}}
					loading="lazy"
					quality={100}
				/>
				<S.JobInfo>
					<p>{name}</p>
					{!!location && (
						<S.JobLocationInfo>{filterJobLocation(location)}</S.JobLocationInfo>
					)}
					<MediaMatch $greaterThan="large">
						<S.PillWrapper>
							<JobPill {...jobPillProps} />
						</S.PillWrapper>
					</MediaMatch>
				</S.JobInfo>
			</S.JobInfoWrapper>

			<S.PillSmallScreen>
				<JobPill {...jobPillProps} />
			</S.PillSmallScreen>

			<S.JobApplicationInfo>
				{type !== 'employee' ? (
					<Link href={`/${JobUrl(id)}`}>
						<Button disabled={!is_available}>Visualizar</Button>
					</Link>
				) : (
					<Button>Visualizar candidatos</Button>
				)}
				<JobCapacity
					applicants={applicants}
					applications_amount={applications_amount}
				/>
			</S.JobApplicationInfo>
		</S.Wrapper>
	);
};
