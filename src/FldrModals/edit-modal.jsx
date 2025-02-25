import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useProductStore } from "@/FldrStore/product-store";
import { useState } from "react";
import { toast } from "sonner";
import moment from "moment";

function EditModal({ setShowModal, productToEdit }) {
    const store = useProductStore()
    
    const [formData, setFormData] = useState({
        productCode: productToEdit.productCode || '',
        productDesc: productToEdit.productDesc || '',
        price: productToEdit.price || '',
        qty: productToEdit.qty || '',
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,        
            [event.target.name]: event.target.value
        })
    }

    const [updating, setUpdating] = useState(false)

    var today = new Date()

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            setUpdating(true)
            await store.updateProduct(formData)

            setShowModal(false)
            toast("Product updated successfully", {
                description: moment(today).format('LLLL')
            })
        } catch (error) {
            console.log('fuck: ', error)
        } finally {
            setUpdating(false)
        }
    }
    
    return ( 
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/20 flex items-center justify-center">
            <form onSubmit={submitForm} className="w-full max-w-sm h-fit bg-white rounded border shadow p-5 space-y-5">
                <h1 className="text-center font-bold uppercase text-neutral-700">Update Product</h1>
                <div className="space-y-3">
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="desc">Product Description</label>
                        <Input type="text" id="desc" name="productDesc" className="border border-gray-500 !rounded" value={formData.productDesc} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="price">Product Price</label>
                        <Input type="number" id="price" name="price" className="border border-gray-500 !rounded" value={formData.price} onChange={handleChange} />
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="qty">Product Quantity</label>
                        <Input type="number" id="qty" name="qty" className="border border-gray-500 !rounded" value={formData.qty} onChange={handleChange} />
                    </div>
                </div>
                <div className="flex justify-end gap-x-2">
                    <Button type="button" variant="outline" size="sm" onClick={(() => setShowModal(false))}>Cancel</Button>
                    <Button variant="destructive" size="sm" disabled={updating} className={`${updating ? 'animate-pulse' : ''}`}>Update</Button>
                </div>
            </form>
        </div>
    );
}

export default EditModal;