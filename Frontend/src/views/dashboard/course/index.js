import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import { Transfer } from "antd/";

import Widget from "components/widget/Widget";
import CourseTable from "./components/CourseTable";

import { courseSelectionData as courses } from "./variables/courseSelectionData";
import DragAndDrop from "./components/dragAndDrop";

const Course = () => {
    return (
        <div>
            <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
                <Widget
                    icon={<MdBarChart className="h-7 w-7" />}
                    title={"Total Courses"}
                    subtitle={"60"}
                />
                <Widget
                    icon={<IoDocuments className="h-6 w-6" />}
                    title={"Completed Courses"}
                    subtitle={"30"}
                />
                <Widget
                    icon={<MdDashboard className="h-6 w-6" />}
                    title={"Core Courses"}
                    subtitle={"30"}
                />
                <Widget
                    icon={<MdDashboard className="h-6 w-6" />}
                    title={"Backlog Courses"}
                    subtitle={"2"}
                />
                <Widget
                    icon={<MdBarChart className="h-7 w-7" />}
                    title={"Uncompleted Courses"}
                    subtitle={"13"}
                />
                <Widget
                    icon={<MdBarChart className="h-7 w-7" />}
                    title={"Total Electives"}
                    subtitle={"13"}
                />

            </div>


            <div className="mt-8">
                <div className="flex items-center justify-between">
                    <h2 className=" dark:text-gray-200 text-navy-700 text-2xl py-4 font-bold">Core Courses</h2>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
                            <span>View all</span>
                        </button>
                    </div>
                </div>
                <div className="text-center gap-2 bg-white rounded-lg shadow-xs w-full">
                    <p className="text-navy-700 font-medium text-xl py-2">Available Courses</p>
                    <div className="text-center gap-2 bg-white rounded-lg shadow-xs dark:bg-gray-800 w-full">
                        <div className=" grid gap-2 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 ">
                            <CourseTable courses={courses} />
                        </div>
                    </div>
                </div>


                <div className="flex items-center justify-between">
                    <h2 className=" dark:text-gray-200 text-navy-700 text-2xl py-4 font-bold">Electives</h2>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center justify-center px-4 py-2 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
                            <span>View all</span>
                        </button>
                    </div>
                </div>

                <DragAndDrop />
                <Transfer />
            </div>
        </div>

    )
};

export default Course;

const CourseCard = ({ course }) => {
    return (
        <>
            <div
                key={course.id}
                className="flex items-center gap-2 p-4 bg-gray-100 rounded-lg shadow-xs dark:bg-gray-800 hover:bg-gray-200 hover:cursor-pointer"
            >
                <div>
                    <div className="text-gray-600 dark:text-gray-200">
                        {course.title}
                    </div>
                </div>
            </div>
        </>
    )
}