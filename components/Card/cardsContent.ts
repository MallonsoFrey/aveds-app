interface Icard {
  id: number,
  imageSrc: string,
  name: string,
  description: string
}

export const cardsContent: Icard[] = [
  {
    id: 1,
    imageSrc: '../../src/assets/icons/heartIcon.svg',
    name: 'Онлайн-прием',
    description: 'Рыба текст',
  },
  {
    id: 2,
    imageSrc: '../../src/assets/icons/noteIcon.svg',
    name: 'Экстренный случай',
    description: 'Рыба текст',
  },
  {
    id: 3,
    imageSrc: '../../src/assets/icons/toolIcon.svg',
    name: 'Лечение рака',
    description: 'Рыба текст',
  }
]