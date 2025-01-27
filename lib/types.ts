export type ThemeType = "LIGHT" | "DARK";

export type Product = {
    id: string,
    productName: string,
    productVariant: string,
    productPrice: string
}

export type ProductPageState = {
    products: Array<Product>,
    page: number,
    count: number,
    maxPages: number
}