import React from "react";
import {
    View,
} from '@react-pdf/renderer'

const JsonData = [

    {
        "id": 1,
        "name": "Akshit",
        "city": "Moradabad"
    },

    {
        "id": 2,
        "name": "Nikita",
        "city": "Lucknow"
    },

    {
        "id": 3,
        "name": "Deeksha",
        "city": "Noida"
    },

    {
        "id": 4,
        "name": "Ritesh",
        "city": "Delhi"
    },

    {
        "id": 5,
        "name": "Somya",
        "city": "Gurugram"
    },

    {
        "id": 6,
        "name": "Eshika",
        "city": "Mumbai"
    },
    {
        "id": 7,
        "name": "Kalpana",
        "city": "Rampur"
    },

    {
        "id": 8,
        "name": "Parul",
        "city": "Chandigarh"
    },

    {
        "id": 9,
        "name": "Himani",
        "city": "Dehradun"
    }
]

const Table = () => {
    const DisplayData = JsonData.map(
        (info) => {
            return (
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                </tr>
            )
        }
    )

    return (
        <View className="m-auto text-justify py-4">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iure facere. Vero, beatae eaque. Cum doloribus aliquid, asperi</p>



            <div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Sr.NO</th>
                            <th>Name</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>


                        {DisplayData}

                    </tbody>
                </table>

            </div>

        </View>
    );
};

export default Table;
