export interface NavItem {
  to: string
  icon: string
  label: string
  ariaLabel?: string
  exact?: boolean | undefined
  // active?: boolean
  // class?: string
}

export type NavItems = NavItem[]
