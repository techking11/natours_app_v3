export interface User {
  id?: number,
  name?: string,
  photo?: string
}

export interface HeaderProps {
  user: User
}