import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParams } from "../../../types";

const AcademicSemester = () => {

    const [params, setParams] = useState<TQueryParams[] | undefined>(undefined)

    const { data: semesterData, isFetching } = useGetAllSemestersQuery(params)
    const tableData = semesterData?.data?.map(({ _id, name, year, startMonth, endMonth }) => ({
        key: _id, name, year, startMonth, endMonth
    }))

    type TTableData = Pick<TAcademicSemester, 'name' | 'year' | 'startMonth' | 'endMonth'>

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: 'Name',
            dataIndex: 'name',
            showSorterTooltip: { target: 'full-header' },
            filters: [
                {
                    text: 'Autumn',
                    value: 'Autumn',
                },
                {
                    text: 'Summer',
                    value: 'Summer',
                },
                {
                    text: 'Fall',
                    value: 'Fall',
                }
            ],
        },
        {
            title: 'Year',
            key: 'Year',
            dataIndex: 'year',
        },
        {
            title: 'Start Month',
            key: 'Start Month',
            dataIndex: 'startMonth',
        },
        {
            title: 'End Month',
            key: 'End Month',
            dataIndex: 'endMonth',
        },
    ];

    const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
        if (extra.action === 'filter') {
            const queryParams: TQueryParams[] = []
            filters.Name?.forEach((item) => (
                queryParams.push({ name: 'name', value: item })
            ))
            setParams(queryParams)
        }
    };

    return (
        <Table
            columns={columns}
            loading={isFetching}
            dataSource={tableData}
            onChange={onChange}
            showSorterTooltip={{ target: 'sorter-icon' }}
        />
    );
};

export default AcademicSemester;