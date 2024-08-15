import { Button, Modal, Table, TableColumnsType } from "antd";
import { useAddFacultiesMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement";
import { TCourse } from "../../../types/courseManagement.type";
import { useState } from "react";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import { useGetAllFacultiesQuery } from "../../../redux/features/admin/userManagement";



const Courses = () => {

    // const [params, setParams] = useState<TQueryParams[] | undefined>(undefined)

    const { data: courseData, isFetching } = useGetAllCoursesQuery(undefined)

    const tableData = courseData?.data?.map(({ _id, title, code, prefix }) => ({
        key: _id, title, code: `${prefix}${code}`
    }))

    type TTableData = Pick<TCourse, 'title' | 'code'>

    const columns: TableColumnsType<TTableData> = [
        {
            title: 'Name',
            key: 'Name',
            dataIndex: 'title',
        },
        {
            title: 'Code',
            key: 'Code',
            dataIndex: 'code',
        },
        {
            title: 'Action',
            key: 'X',
            render: (item) => {
                return <AddFacultyModal courseId={item.key} />
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

const AddFacultyModal = ({ courseId }) => {
    const [addFaculties] = useAddFacultiesMutation()
    const { data: faculties } = useGetAllFacultiesQuery(undefined)
    const facultiesOptions = faculties?.data?.map((faculty) => ({
        value: faculty._id,
        label: faculty.fullName
    }))
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (data) => {
        const facultiesData = {
            courseId: courseId,
            data: data
        }
        addFaculties(facultiesData)
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button onClick={showModal}>
                Add Faculty
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <PHForm onSubmit={handleSubmit}>
                    <PHSelect mode="multiple" options={facultiesOptions} name="faculties" label="Faculty" />
                    <Button htmlType="submit">Add</Button>
                </PHForm>
            </Modal>
        </>
    )
}

export default Courses;