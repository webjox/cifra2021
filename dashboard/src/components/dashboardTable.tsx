import { DataGrid } from '@material-ui/data-grid';
import {useRouter} from 'next/router';

export default function DataTable({rows, columns}) {
    const router = useRouter();

    const doubleClickHandler = (row) => {
        router.push(`/region/${row.id}`);
    }

    return (
      <div style={{ height: 800, width: '100%' }}>
        <DataGrid 
        rows={rows} 
        columns={columns} 
        pageSize={12} 
        onCellDoubleClick={(gridCell => doubleClickHandler(gridCell.row))} />
        </div>
    );
  }