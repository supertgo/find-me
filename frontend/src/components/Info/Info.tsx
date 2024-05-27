import * as S from './Info.styles'

export type InfoProps = {
  title: string
  text: string
}

export const Info = ({
  title,
  text
}: InfoProps) => {
  return (
    <S.Wrapper>
      <span>{title}</span>
      <b>{text}</b>
    </S.Wrapper>
  )
}
