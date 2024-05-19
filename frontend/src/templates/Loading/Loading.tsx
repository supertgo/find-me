import * as S from './Loading.styles'

export type LoadingProps = {}

export const Loading = ({
}: LoadingProps) => {
  return (
    <S.LoadingTemplate aria-busy="true">
      <S.Spinner />
    </S.LoadingTemplate>
  )
}
