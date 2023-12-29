import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const RealtimeAreaChart = () => {
    // State untuk data chart yang berubah secara real-time
    const [chartData, setChartData] = useState({
        series: [
            {
                data: [],
            },
        ],
    });

    // Fungsi untuk menghasilkan data acak untuk chart real-time
    const generateRandomData = () => {
        return Math.floor(Math.random() * 100) + 1;
    };

    // Effect untuk memperbarui data chart setiap detik
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Generate data point baru
            const newDataPoint = {
                x: new Date().getTime(),
                y: generateRandomData(),
            };

            // Perbarui data chart dengan menambahkan data point baru
            setChartData((prevData) => ({
                series: [
                    {
                        data: [...prevData.series[0].data, newDataPoint],
                    },
                ],
            }));
        }, 1000);

        // Membersihkan interval pada saat komponen di-unmount
        return () => clearInterval(intervalId);
    }, []); // Dependency array kosong untuk memastikan efek berjalan hanya sekali pada saat mounting

    // Opsi untuk Real-time Area Chart
    const chartOptions = {
        chart: {
            id: 'realtime-area-chart',
            type: 'area',
            height: 350,
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000,
                },
            },
        },
        xaxis: {
            type: 'datetime',
            range: 10 * 1000, // Menampilkan 10 detik terakhir data
        },
        yaxis: {
            max: 100,
        },
    };

    return (
        <div>
            <Chart
                options={chartOptions}
                series={chartData.series}
                type='area'
                height={350}
            />
        </div>
    );
};

export default RealtimeAreaChart;
