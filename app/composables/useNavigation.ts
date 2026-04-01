/* eslint-disable antfu/top-level-function */
import type { NavLink, NavLinks } from '@/types/navigation'

export const useNavigation = () => {
  const route = useRoute()

  const navLinks: NavLinks = [
    {
      to: '/',
      name: 'streamline-freehand-home',
      label: 'Home',
      exact: true,
      ariaLabel: 'Домашняя страница',
    },
    {
      to: '/menu',
      name: 'streamline-freehand-task-list-pen',
      label: 'Меню',
      exact: false,
      ariaLabel: 'Наше Меню',
    },
    {
      to: '/about',
      name: 'streamline-freehand-collaboration-team-chat',
      label: 'О нас',
      ariaLabel: 'О нас',
      exact: true,

    },
    {
      to: '/contact',
      name: 'streamline-freehand-paginate-filter-mail',
      label: 'Контакты',
      exact: true,
      ariaLabel: 'Наши контакты и обратная связь',
    },
  ]

  const isLinkActive = (link: NavLink): boolean => {
    if (link.exact !== false) {
      return route.path === link.to
    }
    return route.path.startsWith(link.to)
  }

  const getActiveClass = (link: NavLink): string => {
    return isLinkActive(link) ? 'app-nav__link--active' : ''
  }
  return {
    navLinks,
    isLinkActive,
    getActiveClass,
    currentPath: computed(() => route.path),
  }
}
