import React, { Component } from 'react';
import './App.css';
import {Bar, Charts, defaults} from 'react-chartjs-2';
import { Chart } from "react-google-charts";


class History extends Component {
    constructor(props){
        super(props);
        this.state = {
            // Not sure if this is the correct way to set up
            // the state for 'time' and 'date' since we are
            // obtaining these values from a Firebase dataset
            chartData:{
                date: "",
                time: ""
            }
        }
    }

    // Source: https://www.youtube.com/watch?v=p4XTMvagQ2Q
    // This method shows the inital dataset (ex: a user will have a dataset with no values)
    // componentDidMount() {
    //     const rootRef = firebase.database().ref().child('react'); // Whatever is inside '.child()' argument is the root of the database
    //     const timeRef = rootRef.child('time');
        
    //     // Note: the '.on' method allows us to synchronize data in real-time
    //     timeRef.on('value', snap => {
    //         this.setState({
    //             time: snap.val()
    //         });
    //     });

    //     const dateRef = rootRef.child('date');
    //     dateRef.on('value', snap => {
    //         this.setState({
    //             date: snap.val()
    //         });
    //     });
    // }

    // // React life cycle hooks with firebase updates
    // // This method shows the dataset after it's updated (ex: a user will have values in their dataset after using the timer)
    // componentDidUpdate(prevProp, prevState) {
    //     const rootRef = firebase.database().ref().child('react'); // Whatever is inside '.child()' argument is the root of the database
    //     const timeRef = rootRef.child('time');
        
    //     // Note: the '.on' method allows us to synchronize data in real-time
    //     if(prevState.time != this.state.time){
    //         timeRef.on('value', snap => {
    //             this.setState({
    //                 time: snap.val()
    //             });
    //         });
    //     }

    //     if(prevState.date != this.state.date){
    //         const dateRef = rootRef.child('date');
    //         dateRef.on('value', snap => {
    //             this.setState({
    //                 date: snap.val()
    //             });
    //         });
    //     }

    // }

    render(){
        return (
            <div classname='Chart'>
            <h1>History Chart</h1>

            <Chart
                width={'500px'}
                height={'300px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Day', 'Fasting Time', 'NonFasting Time'],
                    ['May 18, 2020', 10, 14],
                    ['May 19, 2020', 8, 16],
                    ['May 20, 2020', 14, 10],
                    ['May 21, 2020', 3, 21],
                    ['May 22, 2020', 9, 15],
                    ['May 23, 2020', 10, 14],
                    ['May 24, 2020', 7, 17],
                ]}
                options={{
                    title: 'Tracking Fast (hours per day)',
                    chartArea: { width: '50%' },
                    isStacked: true,
                    hAxis: {
                    title: 'Total hours per fast and non fast',
                    maxValue: 24,
                    // minValue: 0,
                    },
                    vAxis: {
                    title: 'Dates',
                    },
                }}
            />

            {/* <Bar 
                data={this.state.chartData}
                width={50}
                height={250}
                options={{
                    maintainAspectRatio: false,
                    scales:{
                        xAxes:[{
                            stacked: true,
                            type: 'time',
                            time:{
                                unit: 'week',
                                displayFormats:{
                                    week: 'll'
                                }
                            }
                        }],
                        yAxes: [{
                            stacked: true,
                            type: 'time',
                            time:{
                                displayFormats: {
                                    minute: 'h:mm a'
                                }
                            }
                        }]
                    },
                }}
                /> */}
            </div>
        )
    }
}



export default History;
