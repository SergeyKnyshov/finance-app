import React, { useEffect, useState } from "react";
import { ResponsivePie } from "@nivo/pie";

const MyPie = ({ data }) => (
    <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        legends={[
            {
                anchor: "bottom",
                direction: "row",
                translateY: 56,
                itemWidth: 100,
                itemsSpacing: 20,
                itemHeight: 18,
                symbolShape: "circle",
            },
        ]}
    />
);

const categories = {
    "продукты": "hsl(289, 70%, 50%)",
    "оплата счетов": "hsl(22, 70%, 50%)",
    "одежда": "hsl(352, 70%, 50%)",
    "развлечения": "hsl(65, 70%, 50%)",
    "путешествия": "hsl(20, 70%, 50%)",
    "инвестиции": "hsl(341, 70%, 50%)",
};

const DataChart = ({ data = [] }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const filtered = data
            .map(item => item.split("::"))
            .filter(([, type]) => type === "расход");

        const totals = filtered.reduce((acc, [valueStr, , category]) => {
            const value = parseFloat(valueStr.replace(/[^\d.]/g, ""));
            if (!acc[category]) acc[category] = 0;
            acc[category] += value;
            return acc;
        }, {});

        const pieFormatted = Object.entries(categories).map(([cat, color]) => ({
            id: cat,
            label: cat[0].toUpperCase() + cat.slice(1),
            value: totals[cat] || 0,
            color,
        }));

        setChartData(pieFormatted);
    }, [data]);

    return (
        <div style={{ height: "500px" }}>
            <MyPie data={chartData} />
        </div>
    );
};

export default DataChart;
