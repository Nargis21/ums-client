import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParams } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement";
import { TStudent } from "../../../types/userManagement.type";

const StudentData = () => {

    const [params, setParams] = useState<TQueryParams[] | undefined>(undefined)

    const { data: studentData, isFetching } = useGetAllStudentsQuery(params)
    const tableData = studentData?.data?.map(({ _id, fullName, id }) => ({
        key: _id, fullName, id
    }))

    type TTableData = Pick<TStudent, 'fullName' | 'id'>

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: 'Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Roll No.',
            key: 'id',
            dataIndex: 'id',
        },
        {
            title: 'Action',
            key: 'x',
            render: () => {
                return (
                    <Space>
                        <Button>Details</Button>
                        <Button>Update</Button>
                        <Button>Block</Button>
                    </Space>
                )
            },
            width: '1%'
        }

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

export default StudentData;