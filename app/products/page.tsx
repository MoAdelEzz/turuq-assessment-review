'use client';
import { Button } from "@/components/ui/button";
import PageFrame from "@/components/ui/page-frame";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product, ProductPageState } from "../utils/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsPage() {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<ProductPageState>({
        products: [],
        page: 1,
        count: 10,
        maxPages: 2,
    })

    const viewProductDetails = (id: string) => {
        router.push(`products/${id}`)
    }

    const fetchProductsPage = async () => {
        setLoading(true);
        const response = await fetch(`/api/products?page=${data.page}&count=${data.count}`);
        
        if (!response.ok){
            console.log("smth went wrong");
        } 
        else {
            const res : {data: Array<Product>, error: string, maxPages: number} = await response.json();
            if (res.error != null) {
                console.error("some error occured");
            }
            else {
                setData({
                    products: res.data,
                    page: data.page,
                    count: data.count,
                    maxPages: res.maxPages
                })
            }
        }
        setLoading(false);
    }

    useEffect(() => { fetchProductsPage() }, [])
    useEffect(() => { fetchProductsPage() }, [data.page, data.count])

    return (
        <PageFrame title={"Products"}>
            {
                loading ? 
                <Skeleton className="w-full h-[400px]" /> 
                :
                <Table>
                <TableHeader>
                        <TableRow>
                        <TableHead className="text-center">Id</TableHead>
                        <TableHead className="text-center">Name</TableHead>
                        <TableHead className="text-center">Variant</TableHead>
                        <TableHead className="text-center">Price</TableHead>
                        </TableRow>
                </TableHeader>
                <TableBody>
                    {data.products.map((product) => (
                    <TableRow key={product.id} className="hover:cursor-pointer" onClick={()=>{viewProductDetails(product.id)}}>
                        <TableCell className="text-center">{product.id}</TableCell>
                        <TableCell className="text-center">{product.productName}</TableCell>
                        <TableCell className="text-center">{product.productVariant}</TableCell>
                        <TableCell className="text-center">{product.productPrice}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TableCell colSpan={12}>
                        
                        <div className="flex justify-between items-center gap-4">
                            <div className="text-accent">
                                Page {data.page}/{data.maxPages}
                            </div>

                            <div className="flex justify-end items-center gap-4">
                            <Button className="bg-accent" 
                            disabled={data.page <= 1}
                            onClick={() =>  {
                                setData({...data, page: data.page - 1})
                            }}>
                                <ChevronLeft/>
                            </Button>


                            <Button className="bg-accent" 
                            disabled={data.page >= data.maxPages}
                            onClick={() => {
                                setData({...data, page: data.page + 1})
                            }}>
                                <ChevronRight/>
                            </Button>
                            </div>
                        </div>
                    </TableCell>
                    </TableRow>
                </TableFooter>
                </Table>
            }
            
        </PageFrame>
    );
}