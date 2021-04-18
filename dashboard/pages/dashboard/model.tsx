import DataTable from "../../src/components/dashboardTable";
import Header from "../../src/components/header";

const columns = [
    { field: 'name', headerName: 'Название специальности', width: 300 },
    { field: 'vacancies', headerName: 'Вакансий на рынке', type: 'number', width: 250 },
    { field: 'summary', headerName: 'Резюме на рынке', type: 'number', width: 250 },
    { field: 'allVacancies', headerName: 'Общее число вакансий на рынке', type: 'number', width: 250 },
    { field: 'relevance', headerName: 'Релевантность %', type: 'number', width: 250 },
  ];

const rows = [
    {id: 1, name: 'Информационная безопасность', vacancies: 1023, summary: 140, allVacancies: 10203, relevance: 70},
    {id: 2, name: 'Программная инженерия', vacancies: 2523, summary: 949, allVacancies: 10203, relevance: 50},
    {id: 3, name: 'Прикладная информатика', vacancies: 30, summary: 50, allVacancies: 10203, relevance: 1}
]

export default function Model() {
    return (
        <div>
            <Header 
            name="В панель управления"
            link="/dashboard"
            />
            <div className='container'></div>
            <DataTable columns={columns} rows={rows} />
        </div>
    )
}