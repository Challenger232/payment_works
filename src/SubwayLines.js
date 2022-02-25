import React,{useState} from 'react';
import axios from "axios";

const SubwayLines = () => {
    const [routeData,setRouteData]=useState([])

    function getSubwayStops() {
        alert('Button Clicked');
    }

    function getSubwayLines() {
        axios.get('https://api-v3.mbta.com/routes?filter[type]=0,1')
            .then(response => {
                console.log(response.data);
                setRouteData(response.data.data)
            })
            .catch(error => {
                console.log(error);
            });
    }

    const routes=routeData.map((data,id)=>{
        console.log(data);
        return <div className="grid grid-cols-2 gap-8" key={id}>
            <div className="flex flex-col">
                <h1 className="">ID: {data.id}</h1>
                <h1 className="">Name: {data.attributes.long_name}</h1>
            </div>
            <div className="flex">
                <button className="bg-white text-blue-600 text-sm font-semibold rounded-md px-4 py-2 shadow mt-2 sm:mt-0 mx-2" onClick={getSubwayStops}>
                    Show Stops
                </button>
            </div>
        </div>
    })

    return (
        <div className="px-8">
            <button className="bg-white text-blue-600 text-sm font-semibold rounded-md px-4 py-2 shadow mt-2 sm:mt-0" onClick={getSubwayLines}>
                Click here to get all subway lines
            </button>
            <div className="grid sm:grid-cols-2 gap-4 p-8">
                {routes}
            </div>
        </div>
    );
};

export default SubwayLines;