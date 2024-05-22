'use client';
import { Info } from 'components/Info/Info';
import { ModalCoverLetter } from 'components/ModalCoverLetter/ModalCoverLetter';
import { Skill } from 'components/Skill/Skill';
import { VerticalRow } from 'components/VerticalRow/VerticalRow';
import { Job as JobResponse } from 'protocols/external/job/job';
import { useLoggedUserStore } from 'stores/loggedUserStore/loggedUserStore';
import { Base } from 'templates/Base/Base';
import { Button } from 'components/Button/Button';
import {
	filterJobLocation,
	translateEmploymentType,
	translateSalaryTimeUnit,
	translateWorkModel,
} from 'utils/job';
import { formatToCurrency } from 'utils/money';
import * as S from './Job.styles';
import { JobCapacity } from 'components/JobCapacity/JobCapacity';

export type JobProps = {} & JobResponse;

export const Job = ({
	id,
	name,
	company,
	location,
	description,
	employment_type,
	applications_amount,
	work_model,
	salary,
	salary_time_unit,
	is_available,
	competences,
}: JobProps) => {
	const { type } = useLoggedUserStore((state) => ({
		type: state.type,
	}));

	const applicants = 10;

	return (
		<Base>
			<S.JobHeaderWrapper>
				<S.JobHeader>
					<S.TextWrapper>
						<S.Title>{name}</S.Title>
						<S.JobSubtitle>
							{company!.name} &bull; {location && filterJobLocation(location)}{' '}
							&bull; {translateEmploymentType[employment_type]}
						</S.JobSubtitle>
					</S.TextWrapper>
					<VerticalRow />
					{type === 'recruiter' ? (
						<Button>Visualizar Candidatos</Button>
					) : (
						<ModalCoverLetter jobId={id} disabled={!is_available} />
					)}
				</S.JobHeader>
			</S.JobHeaderWrapper>

			<S.Wrapper>
				<S.InfoWrapper>
					<S.Section>
						<S.Title>Descrição</S.Title>
						<S.Description>{description}</S.Description>
					</S.Section>

					<div>
						<S.Section>
							<S.Title>Sobre esse cargo</S.Title>

							<S.JobCapacityWrapper>
								<div>
									<span>
										<b>{applicants} de</b> no máximo {applications_amount}
									</span>
								</div>
								<JobCapacity
									applicants={applicants}
									applications_amount={applications_amount}
									showBottomInformation={false}
								/>
							</S.JobCapacityWrapper>

							<S.JobAboutThisRole>
								<Info title="Modelo" text={translateWorkModel[work_model]} />
								<Info
									title="Contratação"
									text={translateEmploymentType[employment_type]}
								/>
								<Info title="Salário" text={formatToCurrency(salary)} />
								<Info
									title="Freq.Pagamento"
									text={translateSalaryTimeUnit[salary_time_unit]}
								/>
							</S.JobAboutThisRole>
						</S.Section>

						<S.Section>
							<S.Title>Competências</S.Title>
							{!!competences?.length ? (
								competences.map((c) => <Skill key={c.id} name={c.name} />)
							) : (
								<p>Não há competências</p>
							)}
						</S.Section>
					</div>
				</S.InfoWrapper>
			</S.Wrapper>
		</Base>
	);
};
