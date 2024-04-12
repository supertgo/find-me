import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 70rem;
    padding: 0 15rem 0 15rem;

    h3 {
      margin-bottom: ${theme.space.xlarge};
      text-align: center;
    }

    & > div {
      margin-bottom: ${theme.space.small};
    }

    button {
      margin-top: ${theme.space.medium};
    }

    /* ${media.greaterThan('huge')` */
    /*   width: 40rem;  */

    /*   & > input { */
    /*     width: 100%; */
    /*   } */

    /* `} */
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: #0f172a;
    font-weight: ${theme.font.weights.regular};
    font-size: ${theme.font.sizes.xs};
    margin-top: ${theme.space.medium};
    text-align: center;
  `}
`;

export const BottomRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
  `}
`;
