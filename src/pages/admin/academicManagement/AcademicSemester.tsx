import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";

const AcademicSemester = () => {

    const { data: semesterData } = useGetAllSemestersQuery(undefined)
    console.log(semesterData);
    const tableData = semesterData?.data?.map(({ _id, name, year, startMonth, endMonth }) => ({
        _id, name, year, startMonth, endMonth
    }))

    type TTableData = Pick<TAcademicSemester, '_id' | 'name' | 'year' | 'startMonth' | 'endMonth'>

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
                {
                    text: 'Submenu',
                    value: 'Submenu',
                    children: [
                        {
                            text: 'Green',
                            value: 'Green',
                        },
                        {
                            text: 'Black',
                            value: 'Black',
                        },
                    ],
                },
            ],
        },
        {
            title: 'Year',
            dataIndex: 'year',
        },
        {
            title: 'Start Month',
            dataIndex: 'startMonth',
        },
        {
            title: 'End Month',
            dataIndex: 'endMonth',
        },
    ];

    const onChange: TableProps<TTableData>['onChange'] = (filters) => {
        console.log(filters);
    };

    return (
        <Table
            columns={columns}
            dataSource={tableData}
            onChange={onChange}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    );
};

export default AcademicSemester;