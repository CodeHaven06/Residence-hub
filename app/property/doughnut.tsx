// "use client";

// import { Chart as ChartJS, ArcElement, Tooltip, Legend, } from "chart.js";
// import { Doughnut } from "react-chartjs-2";

// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function DoughnutChart() {

//     const data = {
//         labels: ["Principal & Interest", "Property Tax", "HOA Fee", "Private Mortgage Insurance"],

//         datasets: [
//             {
//                 data: [2.13, 0.6875, 0, 100],

//                 backgroundColor: [
//                     "#8b5cf6",
//                     "#c084fc",
//                     "#f472b6",
//                     "#3b82f6",
//                 ],
//                 borderWidth: 1,
//             },
//         ],
//     };


//     const options = {
//         cutout: "70%",
//         plugins: {
//             legend: {
//                 position: "bottom" as const,
//             },
//         },
//     };

//     return (
//         <div className="bg-pink-100 h-[400px] flex items-center justify-center">
//             <Doughnut
//                 data={data}
//                 options={options}
//             />
//         </div>
//     );
// }

"use client";

import {
Chart as ChartJS,
ArcElement,
Tooltip,
Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
ArcElement,
Tooltip,
Legend
);

export default function DoughnutChart() {

const data = {
    labels: [
        "Principal & Interest",
        "Property Tax",
        "HOA Fee",
        "Private Mortgage Insurance",
    ],

    datasets: [
        {
            data: [2.13, 0.6875, 0, 100],

            backgroundColor: [
                "#8b5cf6",
                "#c084fc",
                "#f472b6",
                "#3b82f6",
            ],

            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,

    maintainAspectRatio: false,

    cutout: "70%",

    plugins: {
        legend: {
            position: "bottom" as const,
        },
    },
};

return (
    <div className="h-[320px] w-full">
        <Doughnut
            data={data}
            options={options}
        />
    </div>
);
}