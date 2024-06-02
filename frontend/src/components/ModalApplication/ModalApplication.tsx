import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Label } from 'components/Label';
import { BaseModal } from 'components/Modals/BaseModal';
import { Pill } from 'components/Pill';
import { Textarea } from 'components/Textarea';
import Link from 'next/link';
import { translateJobApplicationStatus } from 'utils/job';
import { ApplicantUrl } from 'utils/urls';
import { useModalApplication } from '.';
import * as S from './ModalApplication.styles';

export type ModalApplicationProps = {};

export const ModalApplication = ({}: ModalApplicationProps) => {
	const { open, setOpen, coverLetter } = useModalApplication();

	if (coverLetter === null) return null;

	const { user, jobApplication } = coverLetter;

	return (
		<BaseModal
			title={`Carta de Apresentação de ${user.name}`}
			open={open}
			setOpen={setOpen}
		>
			<S.Wrapper>
				<div>
					<Label labelText="Status" />
					<Pill text={translateJobApplicationStatus[jobApplication.status]} />
				</div>
				<Input label="Nome Completo" readOnly value={user.name} />
				<Input label="Email" readOnly value={user.email} />
				<Input label="Celular" readOnly value={user.phone} />

				<Textarea
					label="Carta de Apresentação"
					readOnly
					defaultValue={jobApplication.cover_letter}
				/>

				<Link href={`/${ApplicantUrl(coverLetter.user.id)}`} target="_blank">
					<Button fullWidth>Visitar Perfil</Button>
				</Link>
			</S.Wrapper>
		</BaseModal>
	);
};
