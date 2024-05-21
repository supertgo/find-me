import { Button } from 'components/Button/Button';

import Link from 'next/link';
import { CreateJobUrl } from 'utils/urls';
import * as S from './CreateJobHeader.styles';

export type CreateJobHeaderProps = {
	title: string;
};

export const CreateJobHeader = ({ title }: CreateJobHeaderProps) => {
	return (
		<S.Wrapper>
			<S.Title>{title}</S.Title>
			<Link href={`${CreateJobUrl}`}>
				<Button>Anuncie uma vaga</Button>
			</Link>
		</S.Wrapper>
	);
};
