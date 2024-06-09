import { DropboxIcon } from 'icons/DropboxIcon/DropboxIcon';
import * as S from './PreviousApplicationsItem.styles';
import { JobUrl } from 'utils/urls';

export type PreviousApplicationsItemProps = {
	white?: boolean;
	jobTitle: string;
	company: string;
	location: string;
	workModel: string;
	isAvaliable: boolean;
	id: number;
};

export const PreviousApplicationsItem = ({
	white,
	jobTitle,
	company,
	location,
	workModel,
	id,
}: PreviousApplicationsItemProps) => {
	return (
		<S.Wrapper $white={white} href={`/${JobUrl(id)}`}>
			<S.JobWrapper>
				<DropboxIcon />
				<div>
					<S.JobTitle>{jobTitle}</S.JobTitle>
					<S.JobInfo>
						{company} &bull; {location} &bull;{workModel}
					</S.JobInfo>
				</div>
			</S.JobWrapper>
			<S.DateInfo>
				<p>Data Candidatura</p>
				<span>24 Julho 2024</span>
			</S.DateInfo>
			<S.Status>Em Análise</S.Status>
		</S.Wrapper>
	);
};
