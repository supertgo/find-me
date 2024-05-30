import { Input } from 'components/Input';
import { BaseModal } from 'components/Modals/BaseModal';
import { Textarea } from 'components/Textarea';
import { useModalApplication } from 'hooks/useModalApplication/useModalApplication';
import Link from 'next/link';
import { ApplicantUrl } from 'utils/urls';
import { Button } from 'components/Button';
import * as S from './ModalApplication.styles';

export type ModalApplicationProps = {};

export const ModalApplication = ({}: ModalApplicationProps) => {
	const { open, setOpen, coverLetter } = useModalApplication();

	if (coverLetter === null) return null;

	const { user, jobApplication } = coverLetter;

	return (
		<BaseModal
			title={`Carta de Apresentação de ${coverLetter.user.name}`}
			open={open}
			setOpen={setOpen}
		>
			<S.Wrapper>
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
