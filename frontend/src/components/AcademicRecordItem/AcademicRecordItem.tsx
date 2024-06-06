import { Cross1Icon } from '@radix-ui/react-icons';
import { useRemoveAcademicRecord } from 'hooks/contexts/RemoveAcademicRecord';
import { AcademicRecord } from 'protocols/external/academic-record/academic-record';
import { experienceDate } from 'utils/date';
import * as S from './AcademicRecordItem.styles';

export type AcademicRecordItemProps = {} & Omit<
	AcademicRecord,
	'created_at' | 'updated_at'
>;

export const AcademicRecordItem = ({
	id,
	institution,
	field_of_study,
	degree,
	start_date,
	end_date,
	is_in_progress,
	description,
}: AcademicRecordItemProps) => {
	const { setOpen, setAcademicRecord } = useRemoveAcademicRecord();

	const removeAcademicRecord = () => {
		setAcademicRecord({
			id,
			name: institution,
		});
		setOpen(true);
	};
	return (
		<S.Wrapper>
			<S.AcademicInfo>
				<S.AcademicTopRow>
					<S.AcademicInfoTitle>{institution}</S.AcademicInfoTitle>
					<i title="Remover Formação Acadêmica" onClick={removeAcademicRecord}>
						<Cross1Icon />
					</i>
				</S.AcademicTopRow>
				<S.AcademicInfoSubtitle>{`${degree}, ${field_of_study}`}</S.AcademicInfoSubtitle>
				<S.AcademicInfoSubtitle>
					{experienceDate({
						endDate: end_date,
						isCurrent: is_in_progress,
						startDate: start_date,
					})}
				</S.AcademicInfoSubtitle>
			</S.AcademicInfo>
			<S.Description>{description}</S.Description>
		</S.Wrapper>
	);
};
