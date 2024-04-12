import * as S from './CandidateRowItem.styles'

export type CandidateRowItemProps = {
  name: string
  status: string
  date: string
  job: string
}

export const CandidateRowItem = ({
  name, 
  status,
  date,
  job
}: CandidateRowItemProps) => {
  return (
    <S.Wrapper>
      CandidateRowItem
    </S.Wrapper>
  )
}
