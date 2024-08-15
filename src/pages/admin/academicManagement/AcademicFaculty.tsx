import { useGetAllAcademicFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";
import { TAcademicFaculty } from "../../../types/academicManagement.type";
import { Table, TableColumnsType } from "antd";

const AcademicFaculty = () => {

    const { data: facultyData, isFetching } = useGetAllAcademicFacultiesQuery(undefined)
    const tableData = facultyData?.data?.map(({ _id, name }) => ({
        key: _id, name
    }))

    type TTableData = Pick<TAcademicFaculty, 'name'>

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: 'Name',
            dataIndex: 'name',
        },
    ];

    return (
        <Table
            columns={columns}
            loading={isFetching}
            dataSource={tableData} />
    );
};

export default AcademicFaculty;