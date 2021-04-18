import config from '../../config';
import ReactMapGL, {Marker} from 'react-map-gl';
import { useState, useEffect } from 'react';
import mapData from '../data/mapData.json';
import reactMapData from '../data/reactMapData.json';
import allMapData from '../data/allMapData.json';
import { Button, Input, MenuItem, Select } from '@material-ui/core';
import styles from '../../styles/map.module.css';
import {useRouter} from 'next/router';
import {useHttp} from '../hooks/useHttp';

const mapboxAccessToken = config.MapboxAccessToken;

const getMapData = async (request) => {
    const result = await request(`${config.serverAPIurl}/statistics`);
    if(result.status === 200) return result.data;
}

const getCorrectDataArray = (data: any): any => {
    const array = [];
    data.map((item) => {
        const index = getIndex(item.summary, item.vacancy);
        let color;
        if(index >= 2 || index <= 0.6) color = 'red';
        else if (index >= 1.2 || index <= 0.8) color = 'yellow';
        else color = 'green';
        array.push({
            name: item.name,
            id: item.id,
            latitude: Number(item.coord[0]),
            longitude: Number(item.coord[1]),
            opacity: 0,
            vacancies: item.vacancy,
            summary: item.summary,
            active: false,
            color: color
        })
    })
    return array;
}

const statuses = ['Вся карта', 'React-разработчики'];

const Map = (props) => {
    const {loading, request} = useHttp();
    const [loadedData, setLoadedData] = useState([]);
    const [status, setStatus] = useState(statuses[0]);
    const [viewport, setViewport] = useState({
        latitude: 47.222078, 
        longitude: 39.720349,
        zoom: 6,
        height: "93.8vh",
        width: "100vw",
        mapboxApiAccessToken: mapboxAccessToken
    });
    const [markersStat, setMarkersStat] = useState([]);

    const markersDataZoomHandler = () => {
        if(viewport.zoom < 5.5) {
            setMarkersStat(mapData);
        } else {
            // const newData = getCorrectDataArray(loadedData);
            setMarkersStat(allMapData);
        }
    }

    useEffect(() => {
        // const data = await getMapData(request);
        setLoadedData(allMapData); // fix here after hosting back
        // const newData = getCorrectDataArray(data);
        setMarkersStat(allMapData);
    }, [])

    useEffect(() => {
        if(status === 'Вся карта') {
            markersDataZoomHandler()
        }
    }, [viewport])

    useEffect(() => {
        if(status === 'Вся карта') {
            markersDataZoomHandler();
        } else {
            setMarkersStat(reactMapData);
        }
    }, [status])

    const router = useRouter();

    const markerStatusHandler = (index: number): void => {
        setMarkersStat(prevstate => {
            prevstate[index].active = !prevstate[index].active;
            if(prevstate[index].opacity) prevstate[index].opacity = 0;
            else prevstate[index].opacity = 1;
            return [...prevstate];
        })
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <ReactMapGL 
        {...viewport}
        onViewportChange={(viewport) => {
            setViewport(viewport)
        }}
        mapStyle={config.mapStyle}
        >
            {markersStat.map((item, index) => (
                <Marker
                key={item.id}
                latitude={item.latitude}
                longitude={item.longitude}
                >
                <div className={styles.markerContainer}>
                    {item.active ? <div style={{opacity: item.opacity}} className={styles.popUp} >
                        <span>{item.name}</span>
                        <span>Вакансий: {item.vacancies}</span>
                        <span>Резюме: {item.summary}</span>
                        <span>Коэфицент: {getIndex(item.summary, item.vacancies)}</span>
                        <Button onClick={e => router.push(`/region/${item.id}`)} style={{margin: 5}} variant="contained" color="secondary" >Подробнее</Button>
                    </div> : null}
                    <div 
                    style={{
                        backgroundColor: item.color
                    }}
                    onClick={e => markerStatusHandler(index)} className={styles.marker}>
                        {getIndex(item.summary, item.vacancies)}
                    </div>
                </div>
                </Marker>
            ))}
            <div className={styles.select}>
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
            </div>
        </ReactMapGL>
    )
}

export default Map;

const getIndex = (summary: number, vacancys: number): Number => {
    const result: Number = vacancys / summary;
    return Number(result.toFixed(1));
}