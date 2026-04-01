export interface MenuProduct {
  id: number
  name: string
  price: number
  weight?: string
  description: string
  image?: string
  ingredients?: string[]
}

export interface MenuSubcategory {
  slug: string
  title: string
  description: string
  products: MenuProduct[]
}

export interface MenuCategory {
  slug: string
  title: string
  icon: string
  description?: string
  subcategories?: MenuSubcategory[]
  products?: MenuProduct[]
}

export function useMenu () {
  const categories: MenuCategory[] = [
    {
      slug: 'rolls',
      title: 'Роллы',
      icon: 'streamline:freehand-sushi-roll',
      description: 'Свежие и жареные роллы',
      subcategories: [
        {
          slug: 'cold',
          title: 'Холодные роллы',
          description: 'Классика с свежей рыбой и овощами',
          products: [
            { id: 1, name: 'Филадельфия', price: 450, weight: '220г', description: 'Лосось, сливочный сыр, огурец', ingredients: ['Лосось', 'Сливочный сыр', 'Огурец'] },
            { id: 2, name: 'Калифорния', price: 390, weight: '210г', description: 'Крабовый мясо, авокадо, огурец' },
            { id: 3, name: 'Аляска', price: 420, weight: '230г', description: 'Лосось, авокадо, огурец' },
          ]
        },
        {
          slug: 'fried',
          title: 'Жареные роллы',
          description: 'Хрустящие роллы в темпуре',
          products: [
            { id: 11, name: 'Темпура Филадельфия', price: 480, weight: '250г', description: 'Жареный ролл с лососем' },
            { id: 12, name: 'Хот Ролл', price: 460, weight: '240г', description: 'Лосось, сыр, соус спайси' },
          ]
        },
        {
          slug: 'classic',
          title: 'Классические роллы',
          description: 'Традиционные японские роллы',
          products: [
            { id: 21, name: 'Кунсей', price: 410, weight: '200г', description: 'Копчёный лосось, сыр' },
          ]
        },
        {
          slug: 'sets',
          title: 'СЭТЫ',
          description: 'Наборы роллов на компанию',
          products: [
            { id: 31, name: 'Сет Филадельфия', price: 1250, weight: '950г', description: 'Большой набор классики' },
            { id: 32, name: 'Сет Микс', price: 1890, weight: '1.2кг', description: 'Смешанный набор на 4 человека' },
          ]
        }
      ]
    },
    {
      slug: 'meat',
      title: 'Мясо',
      icon: 'streamline:freehand-meat',
      products: [
        { id: 101, name: 'Стейк рибай', price: 890, weight: '300г', description: 'Говядина премиум' },
        { id: 102, name: 'Курица терияки', price: 520, weight: '250г', description: 'Куриное филе в соусе терияки' },
      ]
    },
    {
      slug: 'fastfood',
      title: 'Фастфуд',
      icon: 'streamline:freehand-burger',
      products: [
        { id: 201, name: 'Чизбургер', price: 320, weight: '180г', description: 'Классический бургер' },
        { id: 202, name: 'Картошка фри', price: 180, weight: '150г', description: 'Хрустящий картофель' },
      ]
    },
    {
      slug: 'drinks',
      title: 'Напитки',
      icon: 'streamline:freehand-drink',
      products: [
        { id: 301, name: 'Кола', price: 120, weight: '0.5л', description: 'Классическая кола' },
        { id: 302, name: 'Зелёный чай', price: 90, weight: '0.4л', description: 'Свежезаваренный чай' },
      ]
    }
  ]

  const getCategory = (slug: string) => categories.find(c => c.slug === slug)

  // Получить подкатегорию роллов
  const getRollSubcategory = (subSlug: string) => {
    const rolls = categories.find(c => c.slug === 'rolls')
    return rolls?.subcategories?.find(s => s.slug === subSlug)
  }

  return {
    categories,
    getCategory,
    getRollSubcategory
  }
}