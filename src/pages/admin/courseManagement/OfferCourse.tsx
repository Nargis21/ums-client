import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { toast } from "sonner";
import PHInput from "../../../components/form/PHInput";
import { useGetAllCourseFacultiesQuery, useGetAllCoursesQuery, useGetAllRegisteredSemestersQuery } from "../../../redux/features/admin/courseManagement";
import { TResponse } from "../../../types";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import { useState } from "react";
import { useGetAllAcademicFacultiesQuery, useGetAllDepartmentsQuery } from "../../../redux/features/admin/academicManagement.api";
import { dayOptions, monthOptions } from "../../../constants/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import PHTimePicker from "../../../components/form/PHTimePicker";
import moment from "moment";


const OfferCourse = () => {
    const [courseId, setCourseId] = useState('')
    const { data: semesterRegistrations } = useGetAllRegisteredSemestersQuery(undefined)
    const { data: academicFaculties } = useGetAllAcademicFacultiesQuery(undefined)
    const { data: academicDepartments } = useGetAllDepartmentsQuery(undefined)
    const { data: courses } = useGetAllCoursesQuery(undefined)
    const { data: courseFaculties } = useGetAllCourseFacultiesQuery(courseId)

    const semesterRegistrationsOptions = semesterRegistrations?.data?.map((item) => ({
        value: item._id,
        label: `${item.academicSemester.name} ${item.academicSemester.year}`
    }))
    const academicFacultiesOptions = academicFaculties?.data?.map((item) => ({
        value: item._id,
        label: item.name
    }))
    const academicDepartmentsOptions = academicDepartments?.data?.map((item) => ({
        value: item._id,
        label: item.name
    }))
    const coursesOptions = courses?.data?.map((item) => ({
        value: item._id,
        label: item.title
    }))
    const courseFacultiesOptions = courseFaculties?.data?.faculties?.map((item) => ({
        value: item._id,
        label: item.fullName
    }))
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {

        // const toastId = toast.loading('Creating...')

        // const courseData = {
        //     ...data,
        //     code: Number(data.code),
        //     credits: Number(data.credits),
        //     isDeleted: false,
        //     preRequisiteCourses: data.preRequisiteCourses ? data.preRequisiteCourses.map((item: string) => ({ course: item, isDeleted: false })) : []
        // }
        // console.log(courseData);
        // try {
        //     const res = await addCourse(courseData) as TResponse<any>
        //     if (res.error) {
        //         toast.error(res.error.data.message, { id: toastId })
        //     } else {
        //         toast.success('Course created!', { id: toastId })
        //     }
        // }
        // catch (err) {
        //     toast.error('Something Went Wrong')
        // }
    }

    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PHForm onSubmit={onSubmit}>
                    <PHSelect label="Semester Registration" name="semesterRegistration" options={semesterRegistrationsOptions} />
                    <PHSelect label="Academic Faculty" name="academicFaculty" options={academicFacultiesOptions} />
                    <PHSelect label="Academic Department" name="academicDepartment" options={academicDepartmentsOptions} />
                    <PHSelectWithWatch onValueChange={setCourseId} label="Course" name="course" options={coursesOptions} />
                    <PHSelect disabled={!courseId} label="Faculty" name="faculty" options={courseFacultiesOptions} />
                    <PHInput type="text" label="Section" name="section" />
                    <PHInput type="text" label="Max Capacity" name="maxCapacity" />
                    <PHSelect label="Days" name="days" options={dayOptions} mode="multiple" />
                    <PHTimePicker label="Start Time" name="startTime" />
                    <Button htmlType="submit" >Submit</Button>
                </PHForm>
            </Col>
        </Flex>
    );
};

export default OfferCourse;