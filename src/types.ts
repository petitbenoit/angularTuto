// Custom data types are defined here.

export type ProductType = { 
    productId: number;
    productName: string;
    productImage: string;
    productPrice: number;
    productStock: boolean;
};

export type StoreType = {
    user : object | null;
}