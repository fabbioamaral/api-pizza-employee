export interface Product {
    name: string;
    price: number;
    description?: string;
    items?: ProductItem[];
}

export interface ProductItem {
    item: string;
    options: ProductItemOption[];
}

export interface ProductItemOption {
    name: string;
    size: string;
    price: number;
}