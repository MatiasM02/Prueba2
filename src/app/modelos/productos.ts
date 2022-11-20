export interface Productos {
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
}

  export interface ProductoConID extends Productos {
    id: number;
  }

  export interface ProductoParcial extends Partial<Productos>{}

