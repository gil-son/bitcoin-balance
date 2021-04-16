import React from 'react'
import { Doughnut } from 'react-chartjs-2';



  const RoscaChart = (props) => {

    let confirmed = props.confirmed;
    let unconfirmed = props.unconfirmed;


    let data = {
        labels: [
            'Confirmed',
            'Unconfirmed',

        ],
        datasets: [
            {
                label: 'Confirmed B$ vs. Unconfirmed B$',
                data: [confirmed, unconfirmed],

                
                backgroundColor: ['rgba(0, 204, 0, 0.5)',
                    'rgba(55, 99, 132, 0.5)'
                ],
                borderColor: ['rgba(0, 204, 0, 0.1)',
                    'rgba(255, 99, 132, 0.1)'

                ],
            }
        ]
    }

    const options = {
        title: {
            display: true
        }
    }

    return (
        <div>
            <Doughnut data={data}
                options={options}

            />
        </div>
    )
}

export default RoscaChart;




