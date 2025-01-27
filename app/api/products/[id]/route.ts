import { Product } from "@/lib/types";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(_request: NextRequest, { params }: { params: { id: string } }) {
    const { id } = await params;
    const userToken = (await cookies()).get("token")?.value
    const response = await fetch(`https://6776992512a55a9a7d0c4868.mockapi.io/products`, {
        method: "GET",
        headers: {
        Authorization: `${userToken}`,
        },
    });  

    if (!response.ok) {
        return Response.json({error: "Couldn't Fetch Products List"}, {status: 500})
    }

    const productsList : Array<Product> = await response.json();
    const target = productsList.find(product => product.id == id);    
    return Response.json({error: null, product: target}, {status: 200})
}