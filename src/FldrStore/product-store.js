import { create } from 'zustand'
import axios from 'axios'
import { connectNaBaby } from '../FldrClass/ClsConnection'

export const useProductStore = create((set) => ({
    products: [],
    getProducts: async () => {
        try {
            const response = await axios.get(`${connectNaBaby()}/API/WebAPI/ListController/ListProduct`)
            
            set({ products: response.data })
        } catch (error) {
            console.log('wadapak:', error)
        }
    },
    updateProduct: async (prodDetails) => {
        try {
            await axios.put(`${connectNaBaby()}/API/UpdateWEBAPI/UpdateProduct`, { ...prodDetails })
            set((state) => state.getProducts())
        } catch (error) {
            console.log(error)  
            throw new Error(error) 
        }
    },
    deleteProduct: async (prodDetails) => {
        try {
            await axios.post(`${connectNaBaby()}/API/WEBAPI/WEBAPIDelete/DeleteModelProduct`, { ...prodDetails })
            set((state) => state.getProducts())
        } catch (error) {
            console.log(error)  
            throw new Error(error) 
        }
    },
    addProduct: async (prodDetails) => {
        try {
            await axios.post(`${connectNaBaby()}/API/WEBAPI/InsertController/InsertProduct`, { ...prodDetails })
            set((state) => state.getProducts())
        } catch (error) {
            console.log(error)  
            throw new Error(error) 
        }
    }
}))