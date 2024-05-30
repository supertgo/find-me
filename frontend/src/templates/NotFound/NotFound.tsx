import Image from 'next/image';
import Error404 from 'assets/error-404.svg';
import { Base } from 'templates/Base/Base';
import Link from 'next/link';
import { Button } from 'components/Button';

import * as S from './NotFound.styles';
import { HomeUrl } from 'utils/urls';

export const NotFound = () => {
	return (
		<Base>
			<S.Container>
				<S.TextContainer>
					<S.ErrorHeading>Opss :(</S.ErrorHeading>
					<S.ErrorHeadingThree>Parece que algo deu errado</S.ErrorHeadingThree>

					<S.ContainerImage>
						<Image
							src={Error404}
							alt={'Algo deu errado!'}
							width="500"
							height="300"
						/>
					</S.ContainerImage>
					<Link href={`/${HomeUrl}`}>
						<Button>Voltar para a home</Button>
					</Link>
				</S.TextContainer>
			</S.Container>
		</Base>
	);
};
