import Header from '../../src/components/header';
import styles from '../../styles/dashboard.module.css'
import DataTable from '../../src/components/dashboardTable';
import { Button, Input, MenuItem, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {useHttp} from '../../src/hooks/useHttp';
import config from '../../config';
import allMapData from '../../src/data/allMapData.json';

const getStatData = async (request) => {
    const result = await request(`${config.serverAPIurl}/statistics`);
    if(result.status === 200) return result.data;
}

const columnsRegions = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'region', headerName: 'Регион', width: 300 },
    { field: 'vacancies', headerName: 'Вакансии', type: 'number', width: 150 },
    { field: 'summary', headerName: 'Соискателей', type: 'number', width: 150 },
    { field: 'index', headerName: 'Индекс', type: 'number', width: 150 },
  ];

const rowsRegion = [
    {id: 1, region: 'Ростовская область', vacancies: 3202, summary: 2390, index: 1.3},
    {id: 2, region: 'Волгоградская область', vacancies: 2202, summary: 1390, index: 1.5},
    {id: 3, region: 'Красноярская область', vacancies: 1202, summary: 920, index: 1.3},
    {id: 4, region: 'Ленинградская область', vacancies: 1202, summary: 1090, index: 1.1},
]

const columnsCities = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'region', headerName: 'Город', width: 300 },
    { field: 'vacancies', headerName: 'Вакансии', type: 'number', width: 150 },
    { field: 'summary', headerName: 'Соискателей', type: 'number', width: 150 },
    { field: 'index', headerName: 'Индекс', type: 'number', width: 150 },
  ];

const rowsCities = [
    {id: 1, region: 'Ростов-на-Дону', vacancies: 124, summary: 652, index: 0.19},
    {id: 2, region: 'Шахты', vacancies: 512, summary: 136, index: 3.7},
    {id: 3, region: 'Аксай', vacancies: 132, summary: 523, index: 0.25},
    {id: 4, region: 'Красный сулин', vacancies: 125, summary: 754, index: 0.16},
]

const statuses = ['Регионы', 'Города'];

export default function Dashboard() {
    const [status, setStatus] = useState(statuses[0]);
    const [citiesData, setSitiesData] = useState([]);
    const {request} = useHttp();

    useEffect(() => {
        // const result = await getStatData(request);
        const result = allMapData;
        setSitiesData((prevstate) => {
            result.map((item, index) => {
                prevstate.push({    
                    id: index,
                    region: item.name,
                    vacancies: item.vacancies,
                    summary: item.summary,
                    index: item.vacancies / item.summary
                })
            })
            return [...prevstate];
        })
    }, [])

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div>
            <Header
            name="На карту"
            link="/map"
            />
            <div className='container'>
            <span className={styles.title}>Панель управления</span>

            <div style={{height: 60}}>
            <Select
                labelId="status-controller"
                id="status-controller"
                value={status}
                onChange={e => statusHandler(e)}
                input={<Input id="status-controller" />}
                >
                {statuses.map((item) => (
                    <MenuItem key={item} value={item}>
                    {item}
                    </MenuItem>
                ))}
            </Select>
            <span style={{marginLeft: 20}}> *индекс считается по формуле: вакансии / соискателей</span>
            <Link 
            href="/dashboard/model"
            >
                <Button 
                style={{float: 'right', margin: 5}}
                variant="contained" 
                color="primary"
                >
                    Модель релевантности
                </Button>
            </Link>
            </div>

            {status === 'Регионы' ? <DataTable rows={rowsRegion} columns={columnsRegions} />
            : 
            <DataTable rows={citiesData} columns={columnsCities} />}
            </div>
        </div>
    )
}