import { Product } from "@/lib/types";
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

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") ?? "-1");
    const count = parseInt(searchParams.get("count") ?? "-1");

    if (page == -1 || count == -1) {
        return Response.json({error: "page and count must be integers", data: null, maxPages: page + 1}, {status: 400}) 
    }  

    try {
        var userToken = (await cookies()).get("token")?.value
        var response = await fetch(`https://6776992512a55a9a7d0c4868.mockapi.io/products`, {
            method: "GET",
            headers: {
            Authorization: `${userToken}`,
            },
        });  
    }
    catch(error) {
        return Response.json( {error: "Couldn't Fetch Products List", data: null, maxPages: page + 1}, {status: 500});
    }
    
    if (!response.ok) {
        return Response.json( {error: "Couldn't Fetch Products List", data: null, maxPages: page + 1}, {status: 500});
    }

    try {
        var productsData = await response.json();
    }
    catch(error) {
        return Response.json( {error: "Parsing Error!", data: null, maxPages: page + 1}, {status: 500});
    }
    
    return Response.json({error: null, data: extractPage(productsData, page, count), maxPages: getMaxPages(productsData, count)}, {status: 200})
}
