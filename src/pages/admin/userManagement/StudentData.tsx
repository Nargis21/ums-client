import { Button, Pagination, Space, Table, TableColumnsType, TableProps } from "antd";
import { useState } from "react";
import { TQueryParams } from "../../../types";
import { useGetAllStudentsQuery } from "../../../redux/features/admin/userManagement";
import { TStudent } from "../../../types/userManagement.type";

const StudentData = () => {

    const [params, setParams] = useState<TQueryParams[]>([])
    const [page, setPage] = useState(1)

    const { data: studentData, isFetching } = useGetAllStudentsQuery([{ name: 'limit', value: '5' }, { name: 'page', value: page }, { name: 'sort', value: 'id' }, ...params])

    const metaData = studentData?.meta

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
        <>
            <Table
                columns={columns}
                loading={isFetching}
                dataSource={tableData}
                onChange={onChange}
                showSorterTooltip={{ target: 'sorter-icon' }}
                pagination={false}
            />
            <Pagination current={page} onChange={(value) => setPage(value)} pageSize={metaData?.limit} total={metaData?.total} />
        </>
    );
};

export default StudentData;