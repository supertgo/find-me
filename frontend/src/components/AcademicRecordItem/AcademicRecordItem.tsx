import { AcademicRecord } from 'protocols/external/academic-record/academic-record';
import * as S from './AcademicRecordItem.styles';

export type AcademicRecordItemProps = {} & Omit<
	AcademicRecord,
	'created_at' | 'updated_at'
>;

export const AcademicRecordItem = ({
	institution,
	field_of_study,
	degree,
	start_date,
	end_date,
	is_in_progress,
	description,
}: AcademicRecordItemProps) => {
	return (
		<S.Wrapper>
			<S.AcademicInfo>
				<S.AcademicInfoTitle>{institution}</S.AcademicInfoTitle>
				<S.AcademicInfoSubtitle>{`${degree}, ${field_of_study}`}</S.AcademicInfoSubtitle>
			</S.AcademicInfo>
			<S.Description>{description}</S.Description>
		</S.Wrapper>
	);
};
