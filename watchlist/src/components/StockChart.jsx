import React, { useState } from 'react';
import Chart from 'react-apexcharts';


const StockChart = ({ chartData , symbol}) => {
    const {day, week, year} = chartData;
    const [dateFormat, setDateFormat] = useState("24h");

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
            type: "datetime",
            labels: {
                datetimeUTC: false
            }
        },
        tooltip: {
            x: {
                format: "MMM dd HH:MM"
            }
        }
    };

    const series = [{
        name: symbol,
        data: determineTimeFormat()
    }]

    const determineTimeFormat = () => {
        switch (dateFormat) {
            case "24h":
                return day;
                break;
            case "7d":
                return week;
                break;
            case "1y":
                return year;
                break;
            default:
                return day;
        }
    };

    const renderButtonSelect = (button) => {
        const classes = "btn m-1";

        if (button === dateFormat) {
            return classes + " btn-primary";
        } else {
            return classes + " btn-outline-primary"
        }
    };

    return (
        <>
            <div className="mt-5 p-4 shadow-sm bg-white"> 
                <Chart 
                    options={options}
                    series={series}
                    type="area"
                    width="100%"
                />
            </div>
            <div>
                <button className='btn btn-outline-primary' onClick={() => setDateFormat("24h")}>24h</button>
                <button className='btn btn-outline-primary' onClick={() => setDateFormat("7d")}>7d</button>
                <button className='btn btn-outline-primary' onClick={() => setDateFormat("1y")}>1y</button>
            </div>
        </>
    )
}

export default StockChart;