export type UserType = 'recruiter' | 'employee'

export type UserProps = {
  name: string
  password: string
  email: string
  phone: string
  type: UserType
}
