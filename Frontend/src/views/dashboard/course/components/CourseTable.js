import React from 'react';

const CourseTable = ({ courses }) => {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-2 lg:px-8">
                    <div className="shadow border-b border-gray-200 sm:rounded-lg mt-8 overflow-x-scroll xl:overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Code
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Title
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Course Structure
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Credit
                                    </th>
                                    {/* <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Prerequisites
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Corequisites
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Category
                  </th> */}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {courses.map(course => (
                                    <tr key={course.id} className="">
                                        <td className="px-2 py-4 whitespace-nowrap text-sm font-bold text-navy-700">{course.code}</td>
                                        <td className="px-2 py-4 whitespace-nowrap text-sm font-bold text-navy-700">{course.title}</td>
                                        <td className="px-2 py-4 whitespace-nowrap text-sm font-bold text-navy-700">{course.courseStructure}</td>
                                        <td className="px-2 py-4 whitespace-nowrap text-sm font-bold text-navy-700">{course.credit}</td>
                                        {/* <td className="px-2 py-4 whitespace-nowrap text-sm font-bold text-navy-700">{course.preReq}</td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-bold text-navy-700">{course.coReq}</td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-bold text-navy-700">{course.courseType}</td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm font-bold text-navy-700">{course.courseCategory}</td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseTable;
