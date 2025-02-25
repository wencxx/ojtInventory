import CardDashboard from "../FldrComponents/card-dashboard";
import { useProductStore } from "@/FldrStore/product-store";
import { useEffect } from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis, CartesianGrid, Line, LineChart,  } from "recharts"
 

function HomePage() {
    const store = useProductStore()
    const products = store.products


    const chartConfig = {
        desktop: {
          label: "Desktop",
          color: "#2563eb",
        },
        mobile: {
          label: "Mobile",
          color: "#60a5fa",
        },
    }

    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]

    return ( 
        <div className="p-10 h-[93dvh] overflow-y-auto space-y-5">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                <CardDashboard products={products} />
            </div>
            <div className="grid lg:grid-cols-2 gap-x-8 gap-y-10">
                <ChartContainer config={chartConfig} className="h-[350px] w-full bg-white border shadow rounded-lg p-5">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                </ChartContainer>
                <ChartContainer config={chartConfig} className="h-[350px] w-full bg-white border shadow rounded-lg p-5">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                        left: 12,
                        right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                        dataKey="desktop"
                        type="monotone"
                        stroke="var(--color-desktop)"
                        strokeWidth={2}
                        dot={false}
                        />
                        <Line
                        dataKey="mobile"
                        type="monotone"
                        stroke="var(--color-mobile)"
                        strokeWidth={2}
                        dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </div>
        </div>
     );
}

export default HomePage;