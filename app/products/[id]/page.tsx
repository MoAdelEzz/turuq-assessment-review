
import {redirect} from "next/navigation"
import { Card } from "@/components/ui/card";
import PageFrame from "@/components/ui/page-frame";

export const getProductInfo = async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, { method: "GET" });
    if (response.ok) {
        
        return response.json();
    }  
    else{ 
        redirect("/products")
    }
}
   
export default async function ProductDetails({params}: {params: {id: string}}) {
    const { id } = await params;
    const { product } = await getProductInfo(id);
    
    return (
        <PageFrame title={`Product Details`}>
            <div className="grid grid-cols-12 gap-y-5 lg:gap-10 w-full">
                <Card className="p-4 flex flex-col gap-5 justify-between items-center col-span-12 lg:col-span-6">
                    <h1 className="text-xl text-accent font-bold">ID</h1>
                    <h2 className="text-md text-foreground font-bold">{product?.id}</h2>
                </Card>

                <Card className="p-4 flex flex-col gap-5 justify-between items-center col-span-12 lg:col-span-6">
                    <h1 className="text-xl text-accent font-bold">Product Name</h1>
                    <h2 className="text-md text-foreground font-bold">{product?.productName}</h2>
                </Card>

                <Card className="p-4 flex flex-col gap-5 justify-between items-center col-span-12 lg:col-span-6">
                    <h1 className="text-xl text-accent font-bold">Product Variant</h1>
                    <h2 className="text-md text-foreground font-bold">{product?.productVariant}</h2>
                </Card>
                
                <Card className="p-4 flex flex-col gap-5 justify-between items-center col-span-12 lg:col-span-6">
                    <h1 className="text-xl text-accent font-bold">Product Price</h1>
                    <h2 className="text-md text-foreground font-bold">{product?.productPrice}</h2>
                </Card>
            </div>

        </PageFrame>
    );
}