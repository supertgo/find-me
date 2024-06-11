import Error404 from 'assets/error-404.svg';
import { Button } from 'components/Button';
import Image from 'next/image';
import Link from 'next/link';
import { JobsUrl } from 'utils/urls';
import * as S from './MyApplications.styles';

export const NoDataFound = () => {
	return (
		<S.Container>
			<S.TextContainer>
				<S.ErrorHeading>Opss :(</S.ErrorHeading>
				<S.ErrorHeadingThree>
					Parece que você não se candidatou a nenhuma vaga
				</S.ErrorHeadingThree>

				<S.ContainerImage>
					<Image
						src={Error404}
						alt={'Algo deu errado!'}
						width="500"
						height="300"
					/>
				</S.ContainerImage>
				<Link href={`/${JobsUrl}`}>
					<Button>Confira nossas vagas aqui!</Button>
				</Link>
			</S.TextContainer>
		</S.Container>
	);
};
