import { ResponsiveBump } from '@nivo/bump'


const MyResponsiveBump = ({ data }) => (
    <ResponsiveBump
        data={data}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        colors={{ scheme: 'spectral' }}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36
        }}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Топ городов-лидеров в it',
            legendPosition: 'middle',
            legendOffset: -40
        }}
    />
)

export default MyResponsiveBump;