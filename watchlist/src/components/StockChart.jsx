import React from 'react';
import Chart from 'react-apexcharts';


const StockChart = ({ chartData , symbol}) => {
    const {day, week, year} = chartData;

    const options = {
        title: {
            text: symbol,
            align: "center",
            style: {
                fontSize: "24px",

            }
        },
        chart: {
            id: "stock data",
            animations: {
                speed: 1300
            }
        },
        xaxis: {
            type: "datetime"
        }
    };

    return (
        <div>

        </div>
    )
}

export default StockChart;