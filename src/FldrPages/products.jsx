import { useState } from 'react'
import { useProductStore } from '../FldrStore/product-store'
import ProductTable from "../FldrComponents/product-table";
import EditModal from '@/FldrModals/edit-modal';
import DeleteConfirmation from '@/FldrModals/delete-confirmation';
import AddModal from '@/FldrModals/add-modal';
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react';

function Products() {
    const store = useProductStore()
    const products = store.products

    const [showModal, setShowModal] = useState(false)
    const [productToEdit, setProdcutToEdit] = useState({})

    const [showConfirmation, setShowConfirmation] = useState(false)
    const [productToDelete, setProdcutToDelete] = useState({})

    const [showAddmodal, setShowAddmodal] = useState(false) 

    const showModalClick = (productCode) => {
        setShowModal(true)

        const product = products.find(product => product.productCode === productCode)
        setProdcutToEdit(product)
    }

    const showConfirmationlClick = (productCode) => {
        setShowConfirmation(true)

        const product = products.find(product => product.productCode === productCode)
        setProdcutToDelete(product)

        console.log(productCode)
    }

    return ( 
        <div className="p-10">
            <div className="bg-white p-5 rounded border shadow">
                <Button size="sm" className="float-end mb-5" onClick={() => setShowAddmodal(true)}>
                    <Plus />
                    <span>Add Product</span>
                </Button>
                <ProductTable products={products} showModal={showModalClick} showConfirmation={showConfirmationlClick} />
            </div>
            {showModal ? <EditModal setShowModal={setShowModal} productToEdit={productToEdit}  /> : ''}
            {showConfirmation ? <DeleteConfirmation setShowConfirmation={setShowConfirmation} productToDelete={productToDelete}  /> : ''}
            {showAddmodal ? <AddModal setShowAddmodal={setShowAddmodal}  /> : ''}
        </div>
     );
}

export default Products;