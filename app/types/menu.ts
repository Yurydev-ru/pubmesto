export interface MenuProduct {
  id: number
  name: string
  price: number
  weight?: string
  description?: string
  image?: string
  ingredients?: string[]
}

export interface MenuSubcategory {
  slug: string
  title: string
  description?: string
  products: MenuProduct[]
}

export interface MenuCategory {
  slug: string
  title: string
  image?: string
  subcategories?: MenuSubcategory[]
  products?: MenuProduct[]
}

// Для карточки категории на главной странице меню
export interface MenuCard extends MenuCategory { }

// Для карточки продукта (используется в ProductCard компоненте)
export interface ProductCard extends MenuProduct { }