export interface Coffee {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
}

export const coffees = [
  {
    id: 1,
    name: 'Latte',
    price: 3.99,
    description: 'Café com leite',
    img: '../../assets/latte.png',
  },
  {
    id: 2,
    name: 'Mocha',
    price: 5.84,
    description: 'Café com chocolate e leite',
    img: '../../assets/mocha.png',
  },
  {
    id: 3,
    name: 'Latte Gelado',
    price: 4.8,
    description: 'Café com leite gelado',
    img: '../../assets/cold-latte.png',
  },
];
