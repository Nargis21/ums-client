
import { useGetAllDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";
import { Table, TableColumnsType } from "antd";

const AcademicDepartment = () => {

    const { data: departmentData, isFetching } = useGetAllDepartmentsQuery(undefined)
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
        },
        {
            title: 'Academic Faculty',
            key: 'Academic Faculty',
            dataIndex: 'academicFaculty',
        },
    ];

    return (
        <Table
            columns={columns}
            loading={isFetching}
            dataSource={tableData}
        />
    );
};

export default AcademicDepartment;