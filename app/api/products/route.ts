import { Product } from "@/app/utils/types";
import { cookies } from "next/headers";

function getMaxPages(data: Array<Product>, count: number) {
    return Math.ceil(data.length / count);
}

function extractPage(data: Array<Product>, page: number, count: number) {
    const maxPages = Math.ceil(data.length / count)
    
    if (page >= maxPages) {
        return data.slice( (maxPages - 1) * count, data.length)
    }
    else { 
        const startIterator = (page - 1) * count
        const endIterator = startIterator + count
        return data.slice(startIterator, endIterator)
    }
}

function extractProductWithId(data: Array<Product>, id: string) {
    return data.find(product => product.id == id);
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const page = parseInt(searchParams.get("page") ?? "-1");
    const count = parseInt(searchParams.get("count") ?? "-1");

    try {
        const userToken = (await cookies()).get("token")?.value
        const response = await fetch(`https://6776992512a55a9a7d0c4868.mockapi.io/products`, {
            method: "GET",
            headers: {
            Authorization: `${userToken}`,
            },
        });  
    
        if (response.ok) {
            const productsData = await response.json();

            if (page == -1 || count == -1) {
                if (!searchParams.has("id")) {
                    return new Response(JSON.stringify({error: "page and count must be integers", data: null, maxPages: page + 1}), {status: 400}) 
                }
                else {
                    return new Response(JSON.stringify({error: null, data: extractProductWithId(productsData, searchParams.get("id")!)}), {status: 200})
                }
            }  

            return new Response(
                JSON.stringify({error: null, data: extractPage(productsData, page, count), maxPages: getMaxPages(productsData, count)}),
                {status: 200}
            )
        } 
        else {
            throw "Failed To Fetch Data"
        }
    }
    catch(error) {
        return new Response(
            JSON.stringify({error: error, data: null, maxPages: page + 1}),
            {status: 400}
        )
    }
}
