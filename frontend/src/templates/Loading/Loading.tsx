import * as S from './Loading.styles'

export type LoadingProps = {}

export const Loading = ({
}: LoadingProps) => {
  return (
    <S.LoadingTemplate>
      <S.Spinner />
    </S.LoadingTemplate>
  )
}
