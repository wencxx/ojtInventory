import { SquarePen, Trash } from "lucide-react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

function TableProducts({ products, showModal, showConfirmation }) {
    return ( 
        <Table>
            <TableCaption>Product Lists.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Product Code</TableHead>
                    <TableHead>Product Description</TableHead>
                    <TableHead>Product Quantity</TableHead>
                    <TableHead>Product Price</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{product.productCode}</TableCell>
                        <TableCell>{product.productDesc}</TableCell>
                        <TableCell>{product.qty}</TableCell>
                        <TableCell>₱{product.price}</TableCell>
                        <TableCell className="text-right">
                            <div className="flex gap-x-2 justify-end">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger onClick={() => showModal(product.productCode)} className="cursor-pointer">
                                            <SquarePen size={17} color="green" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                        <p>Edit Product</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger onClick={() => showConfirmation(product.productCode)} className="cursor-pointer">
                                            <Trash size={17} color="red" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                        <p>Delete Product</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
     );
}

export default TableProducts;