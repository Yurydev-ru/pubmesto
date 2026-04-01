import type { NavItem } from '@types/navigation'

export const useNavigation = () => {
  const navigations: NavItem[] = [
    {
        to:'/',
        name:'streamline-freehand-home-chimney-2',
        label:'Home',
        exact: true
        // active?: boolean,
        // class?: string,
        // ariaLabel?: string,
    },
    {
        to:'/menu',
        name:'streamline-freehand:book-read-list',
        label:'Меню',
        exact: true
    },
    {
        to:'/about',
        name:'streamline-freehand:information-desk',
        label:'О нас',
        exact: true
    },
    {
        to:'/contact',
        name:'streamline-freehand:mail-send-email',
        label:'Контакты',
        exact: true
    }
  ]
  return {
    navigations,
  }
}

