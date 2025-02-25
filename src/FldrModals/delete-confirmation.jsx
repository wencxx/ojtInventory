import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useProductStore } from "@/FldrStore/product-store";
import { useState } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";
import moment from "moment";

function DeleteConfirmation({ setShowConfirmation, productToDelete }) {
    const store = useProductStore()
    const today = new Date()

    const [deleting, setDeleting] = useState(false)
    
    const deleteProduct = async (e) => {
        e.preventDefault()
        try {
            setDeleting(true)
            store.deleteProduct(productToDelete)
            
            setShowConfirmation(false)
            toast("Product delete successfully", {
                description:  moment(today).format('LLLL')
            })
        } catch (error) {
            toast("Something went wrong", {
                description: error.message
            })
        } finally {
            setDeleting(false)
        }
    }

    return ( 
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/20 flex items-center justify-center">
            <form onSubmit={deleteProduct} className="w-full max-w-md bg-white h-fit rounded-lg">
                <div className="h-15 w-full border-b flex items-center justify-between p-5">
                    <h4 className="text-lg">Confirm Delete</h4>
                    <X size={20} onClick={() => setShowConfirmation(false)} className="cursor-pointer" />
                </div>
                <div className="p-5">
                    <p className="">Are you sure you want to delete this product?</p>
                </div>
                <div className="p-5 border-t flex justify-end gap-x-3">
                    <Button type="button" className="cursor-pointer" onClick={() => setShowConfirmation(false)} variant="ghost" size="sm">Cancel</Button>
                    <Button variant="destructive" size="sm" className={`${deleting ? 'animate-pulse' : ''}`} disabled={deleting}>Delete</Button>
                </div> 
            </form>
        </div>
    );
}

export default DeleteConfirmation;