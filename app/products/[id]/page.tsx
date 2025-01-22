'use client'
import { Product } from "@/app/utils/types";
import { Card } from "@/components/ui/card";
import PageFrame from "@/components/ui/page-frame";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetails({params} : {params: any}) {
    const path = usePathname();
    const [product, setProduct] = useState<Product | null>(null)

    const fetchProductData = async () => {
        const id : string = path.split("/").reverse()[0]        
        
        const response = await fetch(`/api/products?id=${id}`, {
            method: "GET"
        });
        if (!response.ok) {
            console.error("something went wrong while fetching");
        }  
        else{ 
            const result = await response.json()
            console.log(result.data);
            
            setProduct(result.data);
        }
    }

    useEffect( () => {fetchProductData()}, [])

    return (
        <PageFrame title={`Product Details`} className="border-2 border-accent">

            <div className="grid grid-cols-12 gap-10">
                <Card className="p-4 flex flex-col gap-5 justify-between items-center col-span-6">
                    <h1 className="text-xl text-accent font-bold">ID</h1>
                    <h2 className="text-md text-foreground font-bold">{product?.id}</h2>
                </Card>

                <Card className="p-4 flex flex-col gap-5 justify-between items-center col-span-6">
                    <h1 className="text-xl text-accent font-bold">Product Name</h1>
                    <h2 className="text-md text-foreground font-bold">{product?.productName}</h2>
                </Card>

                <Card className="p-4 flex flex-col gap-5 justify-between items-center col-span-6">
                    <h1 className="text-xl text-accent font-bold">Product Variant</h1>
                    <h2 className="text-md text-foreground font-bold">{product?.productVariant}</h2>
                </Card>
                
                <Card className="p-4 flex flex-col gap-5 justify-between items-center col-span-6">
                    <h1 className="text-xl text-accent font-bold">Product Price</h1>
                    <h2 className="text-md text-foreground font-bold">{product?.productPrice}</h2>
                </Card>
            </div>

        </PageFrame>
    );
}