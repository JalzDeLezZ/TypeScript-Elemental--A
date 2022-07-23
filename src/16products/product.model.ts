export type Sizes = 'S' | 'M' | 'L' | 'XL';

export type oProduct = {
  name: string;
  price: number;
  description: string;
  image: string;
  stock: number;
  createAt: Date;
  sizes?: Sizes;
};
