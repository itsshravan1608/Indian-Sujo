export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  gradient: string; // CSS gradient mimicking premium fabrics
  rating?: number;
  isBestseller?: boolean;
  image?: string;
}

export interface CollectionCard {
  id: string;
  name: string;
  description: string;
  gradient: string;
  isNew?: boolean;
  image?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
