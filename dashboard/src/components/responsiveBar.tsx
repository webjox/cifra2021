import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyResponsiveBar = ({data}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Количество вакансий" fill="#8884d8" />
            <Bar dataKey="Количество соискателей" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      );
}

export default MyResponsiveBar;