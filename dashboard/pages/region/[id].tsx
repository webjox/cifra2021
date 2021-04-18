import Header from "../../src/components/header";

import ResponsiveLine from '../../src/components/responsiveLine';
import ResponsivePie from '../../src/components/responsivePie';
import ResponsiveBar from '../../src/components/responsiveBar';
import ResponsiveSynchronizedAreaChart from '../../src/components/responsiveSynchronizedAreaChart';

import styles from '../../styles/stats.module.css';

import PieData from '../../src/data/pieData.json';
import DefaultData from '../../src/data/defaultData.json';
import { useState } from "react";

 const RegionData = (props) => {
    const [data, setData] = useState({
        name: "Ростов-на-Дону",
        index: 0.5,
        vacancys: 102,
        summary: 50,
        gradutes: 0,
        last_update: new Date()
    });

    return (
        <div>
            <Header
            name="Панель управления"
            link="/dashboard"
            />

            <div className={styles.regionInfo}>
                <span>Регион: {data.name}</span>
                <span>Индекс: {data.index}</span>
                <span>Количество вакансий: {data.vacancys}</span>
                <span>Количество соискателей: {data.summary}</span>
                <span>Количество выпускников: {data.gradutes}</span>
                <span>Последнее обновление: {data.last_update.toString()}</span>
            </div>

            <div className={styles.statContainer}>

                <div className={styles.stat}>
                <ResponsiveLine data={DefaultData} />
                </div>

                <div className={styles.stat}>
                <ResponsivePie data={PieData} />
                </div>

                <div className={styles.stat}>
                <ResponsiveBar data={DefaultData} />
                </div>

                <div className={styles.stat}>
                <ResponsiveSynchronizedAreaChart data={DefaultData} />
                </div>

            </div>  

        </div>
    )
 }

 export default RegionData;