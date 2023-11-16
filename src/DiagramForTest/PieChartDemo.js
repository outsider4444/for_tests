import React, {useState, useEffect} from 'react';
import {Chart} from "primereact/chart";
import classes from "./PieChartDemo.module.css";
import Header from "../Templates/Header/Header";
import Sidebar from "../Templates/Sidebar/Sidebar";

export default function PieChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['A', 'B', 'C', 'D'],
            datasets: [
                {
                    data: [540, 325, 702, 185],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--green-500'),
                        documentStyle.getPropertyValue('--gray-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'),
                        documentStyle.getPropertyValue('--yellow-400'),
                        documentStyle.getPropertyValue('--green-400'),
                        documentStyle.getPropertyValue('--gray-500')
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div>
            <div className={classes.content_chart}>
                <Chart type="pie" data={chartData} options={chartOptions} className={classes.card_diagram}/>
            </div>
        </div>
    )
}