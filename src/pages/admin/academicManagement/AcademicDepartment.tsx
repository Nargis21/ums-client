import { useState } from "react";
import { TQueryParams } from "../../../types";
import { useGetAllDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";
import { Table, TableColumnsType, TableProps } from "antd";

const AcademicDepartment = () => {

    const [params, setParams] = useState<TQueryParams[] | undefined>(undefined)

    const { data: departmentData, isFetching } = useGetAllDepartmentsQuery(params)
    console.log(departmentData);
    const tableData = departmentData?.data?.map(({ _id, name, academicFaculty }) => ({
        key: _id, name, academicFaculty: academicFaculty?.name
    }))

    type TTableData = {
        name: string,
        academicFaculty: string
    }

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
            title: 'Academic Faculty',
            key: 'Academic Faculty',
            dataIndex: 'academicFaculty',
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

export default AcademicDepartment;