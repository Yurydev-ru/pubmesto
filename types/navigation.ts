export interface NavItemProps {
  to: string
  icon: string
  lable: string
  active?: boolean
  class?: string
  ariaLabel?: string
}

export type NavItemEmits = {
  click: [event: MouseEvent]
}
