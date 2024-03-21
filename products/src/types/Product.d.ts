export interface Product {
  description: string;
  title: string;
  id: string;
  price: number;
}

export type ProductList = Array<Product>;
