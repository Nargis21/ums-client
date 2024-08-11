import { Button, Dropdown, MenuProps, Table, TableColumnsType, Tag } from "antd";
import { useGetAllRegisteredSemestersQuery, useUpdateSemesterStatusMutation } from "../../../redux/features/admin/courseManagement";
import { TSemester } from "../../../types/courseManagement.type";
import moment from "moment";
import { useState } from "react";

const items = [
    {
        label: 'Upcoming',
        key: 'UPCOMING'
    },
    {
        label: 'Ongoing',
        key: 'ONGOING'
    },
    {
        label: 'Ended',
        key: 'ENDED'
    },
]

const RegisteredSemesters = () => {

    // const [params, setParams] = useState<TQueryParams[] | undefined>(undefined)
    const [semesterId, setSemesterId] = useState(undefined)

    const { data: semesterData, isFetching } = useGetAllRegisteredSemestersQuery(undefined)
    const [updateSemesterStatus] = useUpdateSemesterStatusMutation()

    const tableData = semesterData?.data?.map(({ _id, academicSemester, status, startDate, endDate }) => ({
        key: _id, name: `${academicSemester.name} ${academicSemester.year}`, status, startDate: moment(new Date(startDate)).format('LL'), endDate: moment(new Date(endDate)).format('LL')
    }))

    type TTableData = Pick<TSemester, 'status' | 'startDate' | 'endDate'>

    const handleStatusUpdate: MenuProps['onClick'] = (data) => {
        const semesterData = {
            id: semesterId,
            data: {
                status: data.key
            }
        }

        updateSemesterStatus(semesterData)
    }

    const menuProps = {
        items,
        onClick: handleStatusUpdate
    }

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Status',
            key: 'status',
            render: (item) => {
                let color;
                if (item.status === 'UPCOMING') {
                    color = 'blue'
                }
                if (item.status === 'ONGOING') {
                    color = 'green'
                }
                if (item.status === 'ENDED') {
                    color = 'red'
                }
                return <Tag color={color}>{item.status}</Tag>
            }
        },
        {
            title: 'Start date',
            key: 'startDate',
            dataIndex: 'startDate',
        },
        {
            title: 'End Date',
            key: 'endDate',
            dataIndex: 'endDate',
        },
        {
            title: 'Action',
            key: 'X',
            render: (item) => {
                return (
                    <Dropdown menu={menuProps} trigger={['click']}>
                        <Button onClick={() => setSemesterId(item.key)}>Update</Button>
                    </Dropdown>
                )
            }

        },
    ];

    // const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra) => {
    //     if (extra.action === 'filter') {
    //         const queryParams: TQueryParams[] = []
    //         filters.Name?.forEach((item) => (
    //             queryParams.push({ name: 'name', value: item })
    //         ))
    //         setParams(queryParams)
    //     }
    // };

    return (
        <Table
            columns={columns}
            loading={isFetching}
            dataSource={tableData}
        // onChange={onChange}
        // showSorterTooltip={{ target: 'sorter-icon' }}
        />
    );
};

export default RegisteredSemesters;