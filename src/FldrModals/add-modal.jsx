import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useProductStore } from "@/FldrStore/product-store";
import { useState } from "react";
import { toast } from "sonner";
import moment from "moment";

function AddModal({ setShowAddmodal }) {
    const store = useProductStore()
    
    const [formData, setFormData] = useState({
        productCode: '',
        productDesc: '',
        price: '',
        qty: '',
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,        
            [event.target.name]: event.target.value
        })
    }

    const [adding, setAdding] = useState(false)

    var today = new Date()

    const submitForm = async (e) => {
        e.preventDefault()
        try {
            setAdding(true)
            await store.addProduct(formData)

            setShowAddmodal(false)
            toast("Product added successfully", {
                description: moment(today).format('LLLL')
            })
        } catch (error) {
            console.log('fuck: ', error)
        } finally {
            setAdding(false)
        }
    }
    
    return ( 
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/20 flex items-center justify-center">
            <form onSubmit={submitForm} className="w-full max-w-sm h-fit bg-white rounded border shadow p-5 space-y-5">
                <h1 className="text-center font-bold uppercase text-neutral-700">Add Product</h1>
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
                    <Button type="button" variant="outline" size="sm" onClick={(() => setShowAddmodal(false))}>Cancel</Button>
                    <Button variant="destructive" size="sm" disabled={adding} className={`${adding ? 'animate-pulse' : ''}`}>Add</Button>
                </div>
            </form>
        </div>
    );
}

export default AddModal;