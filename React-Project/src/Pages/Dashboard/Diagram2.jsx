import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const RealtimeChart = () => {
    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'TEAM A',
                type: 'column',
                data: [],
            },
            {
                name: 'TEAM B',
                type: 'area',
                data: [],
            },
            {
                name: 'TEAM C',
                type: 'line',
                data: [],
            },
        ],
    });

    const generateRandomData = () => {
        return Math.floor(Math.random() * 100) + 1;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newDataPoint1 = generateRandomData();
            const newDataPoint2 = generateRandomData();
            const newDataPoint3 = generateRandomData();

            setChartData((prevData) => ({
                series: [
                    {
                        ...prevData.series[0],
                        data: [...prevData.series[0].data, newDataPoint1],
                    },
                    {
                        ...prevData.series[1],
                        data: [...prevData.series[1].data, newDataPoint2],
                    },
                    {
                        ...prevData.series[2],
                        data: [...prevData.series[2].data, newDataPoint3],
                    },
                ],
            }));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const chartOptions = {
        chart: {
            height: 350,
            type: 'line',
            stacked: false,
        },
        stroke: {
            width: [0, 2, 5],
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            },
        },
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: 'vertical',
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100],
            },
        },
        labels: [
            '01/01/2003',
            '02/01/2003',
            '03/01/2003',
            '04/01/2003',
            '05/01/2003',
            '06/01/2003',
            '07/01/2003',
            '08/01/2003',
            '09/01/2003',
            '10/01/2003',
            '11/01/2003',
        ],
        markers: {
            size: 0,
        },
        xaxis: {
            type: 'datetime',
        },
        yaxis: {
            title: {
                text: 'Points',
            },
            min: 0,
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== 'undefined') {
                        return y.toFixed(0) + ' points';
                    }
                    return y;
                },
            },
        },
    };

    return (
        <div>
            <Chart
                options={chartOptions}
                series={chartData.series}
                type='line'
                height={350}
            />
        </div>
    );
};

export default RealtimeChart;
