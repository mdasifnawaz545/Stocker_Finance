import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import data from '../../constant/data';

const ApexChart = ({ companySelection }) => {
    const [series, setSeries] = useState([]);

    const filterData = data.filter(item => item.Name === companySelection);

    // Transform the filtered data for the chart
    const transformedData = filterData.map(item => ({
        x: new Date(),
        y: [item.Open, item.High, item.Low, item.Close]
    }));

    // Update the chart's series with the new transformed data
    setSeries([{ data: transformedData }]);
    console.log(series)

    // useEffect(() => {
    //     // Filter data based on selected company name
    //     const filterData = data.filter(item => item.Name === companySelection);

    //     // Transform the filtered data for the chart
    //     const transformedData = filterData.map(item => ({
    //         x: new Date(),
    //         y: [item.Open, item.High, item.Low, item.Close]
    //     }));

    //     // Update the chart's series with the new transformed data
    //     setSeries([{ data: transformedData }]);
    //     console.log(series)
    // }, [companySelection]); // Runs whenever companySelection changes

    const options = {
        chart: {
            type: 'candlestick',
            height: 350
        },
        title: {
            text: `${companySelection} CandleStick Chart`,
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    };

    return (
        <div>
            <div id="chart">
                <ReactApexChart
                    options={options}
                    series={series}
                    type="candlestick"
                    height={350}
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

const Apex = ({ companySelection }) => {
    return (
        <div>
            <ApexChart companySelection={companySelection} />
        </div>
    );
};

export default Apex;
