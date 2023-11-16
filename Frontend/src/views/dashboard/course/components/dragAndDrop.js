import React, { useState } from 'react';
import { courseSelectionData as courses } from "../variables/courseSelectionData";

const Box = ({ boxId, items, onDragStart }) => {
    return (
        <div className='mt-8 overflow-x-scroll xl:overflow-hidden'>
            <table className="min-w-full divide-y divide-gray-200 border-separate border-spacing-y-2">
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
                            Structure
                        </th>
                        <th
                            scope="col"
                            className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Credit
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y my-2 py-4 rounded-lg ">
                    {items.map(course => (
                        <tr key={course.id} className="item w-full p-2 bg-gray-100 cursor-pointer" onDragStart={onDragStart} draggable>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-bold text-navy-700">{course.code}</td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-bold text-navy-700">{course.title}</td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-bold text-navy-700">{course.courseStructure}</td>
                            <td className="px-2 py-4 whitespace-nowrap text-sm font-bold text-navy-700">{course.credit}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const DragAndDrop = () => {
    const [box1Items, setBox1Items] = useState(courses);
    const [box2Items, setBox2Items] = useState(courses.slice(0, 2));

    const onDragStart = (e, item) => {
        e.dataTransfer.setData('text/plain', item);
    };

    const onDragOver = (e) => {
        e.preventDefault();
    };

    const onDrop = (e, targetBox) => {
        const item = e.dataTransfer.getData('text/plain');
        if (targetBox === 'box1') {
            setBox1Items([...box1Items, item]);
        } else if (targetBox === 'box2') {
            setBox2Items([...box2Items, item]);
        }
    };

    return (
        <div className='overflow-auto'>
            <div className="flex lg:flex-row flex-col justify-between gap-2 py-2">
                <div className="text-center gap-2 p-4 bg-white rounded-lg shadow-xs w-full">
                    <p className="text-navy-700 font-medium text-xl">Available Courses</p>
                    <div className="mt-4 grid gap-2 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
                        <div
                            className="drop-area"
                            onDragOver={onDragOver}
                            onDrop={(e) => onDrop(e, 'box1')}
                        >
                            <Box boxId="box1" items={box1Items} onDragStart={(e) => onDragStart(e, 'Item 1')} />
                        </div>
                    </div>
                </div>
                <div className="text-center gap-2 p-4 bg-white rounded-lg shadow-xs w-full">
                    <p className="text-navy-700 font-medium text-xl">Selected Courses</p>
                    <div className='mt-4 grid gap-2 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1'>
                        <div
                            className="drop-area"
                            onDragOver={onDragOver}
                            onDrop={(e) => onDrop(e, 'box2')}
                        >
                            <Box boxId="box2" items={box2Items} onDragStart={(e) => onDragStart(e, 'Item 2')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DragAndDrop;
