import CardDashboard from "../FldrComponents/card-dashboard";
import { useProductStore } from "@/FldrStore/product-store";
import { useEffect } from "react";

function HomePage() {
    const store = useProductStore()
    const products = store.products

    return ( 
        <div className="p-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <CardDashboard products={products} />
            </div>
        </div>
     );
}

export default HomePage;