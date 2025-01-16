/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import data from "../../constant/data";

const ApexChart = ({ companySelection, chartType, period }) => {
  const [series, setSeries] = useState([]);
  const [brushSeries, setBrushSeries] = useState([]);

  useEffect(() => {
    const filterData = data.filter((item) => item.Name === companySelection);

    const today = new Date();
    const filteredByPeriod = filterData.filter((item) => {
      const itemDate = new Date(item.Date);
      if (period === "1m") {
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);
        return itemDate >= oneMonthAgo && itemDate <= today;
      } else if (period === "6m") {
        const sixMonthsAgo = new Date(today);
        sixMonthsAgo.setMonth(today.getMonth() - 6);
        return itemDate >= sixMonthsAgo && itemDate <= today;
      } else if (period === "1y") {
        const oneYearAgo = new Date(today);
        oneYearAgo.setFullYear(today.getFullYear() - 1);
        return itemDate >= oneYearAgo && itemDate <= today;
      } else {
        return true;
      }
    });

    const transformedData = filteredByPeriod.map((item) => ({
      x: new Date(item.Date),
      y: [item.Open, item.High, item.Low, item.Close],
    }));
    setSeries([{ data: transformedData }]);
    setBrushSeries([{ data: transformedData }]);
  }, [companySelection, chartType, period]);

  const mainChartOptions = {
    chart: {
      id: "candlestick-chart",
      type: `${chartType}`,
      height: 350,
    },
    title: {
      text: ``,
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        formatter: (value) => value.toFixed(2),
      },
    },
  };

  const brushChartOptions = {
    chart: {
      id: "brush-chart",
      height: 150,
      type: "area",
      brush: {
        target: "candlestick-chart",
        enabled: true,
      },
      selection: {
        enabled: true,
      },
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
        tooltip: {
          enabled: true,
        },
        labels: {
          formatter: (value) => value.toFixed(2),
        },
      },
  };

  return (
    <div>
      <div id="main-chart">
        <ReactApexChart
          options={mainChartOptions}
          series={series}
          type={chartType}
          height={320}
        />
      </div>
      <div id="brush-chart">
        <ReactApexChart
          options={brushChartOptions}
          series={brushSeries}
          type="area"
          height={120}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

const Apex = ({ companySelection }) => {
  const [chartType, setChartType] = useState("candlestick");
  const [period, setPeriod] = useState("overall");

  return (
    <>
      <div className="flex justify-between items-center gap-4 p-1">
        <div className="flex gap-4 scale-75 -mb-8">
          <div
            className={`${
              period === "1m" ? "bg-gray-300" : "bg-gray-300"
            } rounded-xl cursor-pointer flex hover:shadow-lg duration-300 items-center justify-center px-4 `}
            onClick={() => setPeriod("1m")}
          >
            1M
          </div>
          <div
            className={`${
              period === "6m" ? "bg-gray-300" : "bg-gray-300"
            } rounded-xl px-2 py-1 cursor-pointer hover:shadow-lg duration-300  flex items-center justify-center px-4`}
            onClick={() => setPeriod("6m")}
          >
            6M
          </div>
          <div
            className={`${
              period === "1y" ? "bg-gray-300" : "bg-gray-300"
            } rounded-xl px-2 py-1 cursor-pointer hover:shadow-lg duration-300  flex items-center justify-center px-4`}
            onClick={() => setPeriod("1y")}
          >
            1Y
          </div>
          <div
            className={`${
              period === "overall" ? "bg-gray-300" : "bg-gray-300"
            } rounded-xl px-2 py-1 cursor-pointer hover:shadow-lg duration-300  flex items-center justify-center px-4`}
            onClick={() => setPeriod("overall")}
          >
            ALL TIME
          </div>
        </div>
        <div>
          <select
            value={chartType}
            onChange={(e) => setChartType(e.target.value)}
          >
            <option value="candlestick">Candlestick</option>
            <option value="area">Area</option>
            <option value="line">Line</option>
            <option value="bar">Bar</option>
          </select>
        </div>
      </div>
      <div>
        <ApexChart
          companySelection={companySelection}
          chartType={chartType}
          period={period}
        />
      </div>
    </>
  );
};

export default Apex;
