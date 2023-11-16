import React from 'react'
import {
    Link,
    Text,
    View,
} from '@react-pdf/renderer'

const Footer = () => {
    return (
        <View className=" m-auto">
            <View className="flex flex-col">
                <View className="flex flex-col ">
                    <Text className="bg-gray-100 p-4">
                        <h2 className='font-medium'>Disclaimer</h2>
                        <p className='text-gray-700'>There could be some slips in the grade calculation, the GRADE REPORT issued by the Academic Section will be final. Also, these Results are meant for Student Information and are not meant to be the GRADE REPORTS.
                        <br />

Any discripancies in the calculation of the CGPA must be brought to the notice of exam section within 15 days of publication of results in the student portal. As exam section is currently busy with conduction of II & III B. Tech. examinations students are requested to restrain from calling examination section. All such requests can be communicated through mail to ad_exams@iitp.ac.in</p>
                    </Text>
                    <Text className="text-center text-gray-400">copyright @ {new Date().getFullYear()} AIS, IIT patna</Text>
                </View>
            </View>
        </View>
    )
}

export default Footer
