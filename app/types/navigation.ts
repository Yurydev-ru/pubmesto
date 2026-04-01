export interface NavLink {
  to: string
  name: string
  label: string
  ariaLabel?: string
  exact?: boolean | undefined
}

export type NavLinks = NavLink[]
