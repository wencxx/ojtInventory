import { ShoppingBasket } from "lucide-react";

const CardData = [
    {
        label: "Total Products",
        icon: <ShoppingBasket size={35} />,
    },
    {
        label: "Total Products",
        icon: <ShoppingBasket size={35} />,
    },
    {
        label: "Total Products",
        icon: <ShoppingBasket size={35} />,
    },
    {
        label: "Total Products",
        icon: <ShoppingBasket size={35} />,
    },
]

function CardDashboard({ products }) {
    return ( 
        <>
            {CardData.map((card, index) => (
                <div key={index} className="h-fit bg-white rounded-lg shadow border border-gray-300 p-5 text-neutral-700 space-y-5">
                    <div className="space-y-2">
                        { card.icon }
                        <p className="text-xl font-bold">{ card.label }</p>
                    </div>
                    <h4 className="text-5xl font-semibold">{products.length}</h4>
                </div>
            ))}
        </>
    );
}

export default CardDashboard;