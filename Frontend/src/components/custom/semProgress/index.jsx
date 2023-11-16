import React from 'react';

const semProgressColors = [
    {
        "color": "text-gray-800",
        "bgColor": "bg-gray-200"
    },
    {
        "color": "text-green-600",
        "bgColor": "bg-green-300"
    },
    {
        "color": "text-blue-600",
        "bgColor": "bg-blue-100"
    },
    {
        "color": "text-red-600",
        "bgColor": "bg-red-200"
    },
]

const semProgressData = [
    {
        "semester": 1,
        "status": 2,
    },
    {
        "semester": 2,
        "status": 2,
    },
    {
        "semester": 3,
        "status": 3,
    },
    {
        "semester": 4,
        "status": 1,
    },
    {
        "semester": 5,
        "status": 0,
    },
    {
        "semester": 6,
        "status": 0,
    },
    {
        "semester": 7,
        "status": 0,
    },
    {
        "semester": 8,
        "status": 0,
    }
]

const SemesterProgress = () => {
    return (
        <div className="min-w-[300px] hidden md:block">
            <SemesterProgressList semProgressData={semProgressData} />
        </div >
    );
}

const SemesterProgressList = ({ semProgressData }) => {
    return (
        <ol className='flex items-center w-full'>
            {semProgressData.map((sem, index, array) => {
                if (index === array.length - 1) {
                    // last one
                    return (
                        <>

                            <li className={`flex w-full items-center ${semProgressColors[[sem.status]].color}dark:text-blue-500 `}>
                                <span className={`flex items-center justify-center w-8 h-8 ${semProgressColors[[sem.status]].bgColor}  rounded-full lg:h-10 lg:w-10 shrink-0`}>
                                    <p className='font-bold'>{sem.semester}</p>
                                </span>
                            </li>
                        </>

                    )
                } else {
                    // not last one
                    return (
                        <li key={index} className={`flex w-full items-center ${semProgressColors[[sem.status]].color} dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800`}>
                            <span className={`flex items-center justify-center w-8 h-8 ${semProgressColors[[sem.status]].bgColor}  rounded-full lg:h-10 lg:w-10 shrink-0`}>
                                <p className={`font-bold ${semProgressColors[[sem.status]].color}`}>{sem.semester}</p>
                                {/* {`${semProgressColors[[sem.status]].color}`} */}
                            </span>
                        </li>
                    )
                }
            })}
        </ol>
    )
}


export default SemesterProgress;
