/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import data from '../../constant/data';

const ApexChart = ({ companySelection }) => {
    const [series, setSeries] = useState([]);
    useEffect(() => {
        const filterData = data.filter(item => item.Name === companySelection);
        const transformedData = filterData.map(item => ({
            x: new Date(item.Date),
            y: [item.Open, item.High, item.Low, item.Close]
        }));
        setSeries([{ data: transformedData }]);
    }, [companySelection]);

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
            },
            labels: {
                formatter: (value) => value.toFixed(2) 
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
