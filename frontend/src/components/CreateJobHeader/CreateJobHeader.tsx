import { Button } from 'components/Button/Button';

import * as S from './CreateJobHeader.styles';
import Link from 'next/link';
import { CreateJobUrl } from 'utils/urls';

export type CreateJobHeaderProps = {
	title: string;
};

export const CreateJobHeader = ({ title }: CreateJobHeaderProps) => {
	return (
		<S.Wrapper>
			<S.Title>{title}</S.Title>
			<Link href={`${CreateJobUrl}`}>
				<Button>Anunciar uma vaga</Button>
			</Link>
		</S.Wrapper>
	);
};
