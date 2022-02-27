import React,{Component} from 'react';
import axios from "axios";

class SubwayLines extends Component {

    constructor(props) {
        super(props);
        this.state = {
            routes : [],
            stops : [],
            currentRoute : "",
        };
    }

    componentDidMount () {
        this.getSubwayLines()
    }

    getSubwayStops(id, name) {
        this.setState({ currentRoute : name})
        axios.get('https://api-v3.mbta.com/stops?filter[route]='+id)
            .then(response => {
                this.setState({ stops: response.data.data})
            })
            .catch(error => {
                console.log(error);
            })
    }

    getSubwayLines() {
        axios.get('https://api-v3.mbta.com/routes?filter[type]=0,1')
            .then(response => {
                this.setState({ routes: response.data.data})
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="flex flex-row">
                <div className="flex w-1/4">
                    <div className="px-3 py-4 overflow-y-auto rounded bg-gray-200 dark:bg-gray-800 w-full">
                        { this.state.routes === null && <p>Loading routes...</p> }
                        {
                            this.state.routes &&
                            this.state.routes.map(data=> (
                                <div key={data.id}>
                                    <button className="flex flex-col items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                                            onClick={() => this.getSubwayStops(data.id, data.attributes.long_name)}>
                                        <span className="">ID: {data.id}</span>
                                        <span>Name: {data.attributes.long_name}</span>
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex w-3/4 flex flex-col">
                    <div className="text-gray-800 text-2xl px-4 font-bold flex">
                        { this.state.currentRoute && <h1>{this.state.currentRoute} Stops</h1> }
                    </div>
                    <div className="grid grid-cols-4 gap-4 flex p-4">
                        { this.state.stops === null && <p>Loading stops...</p> }
                        { this.state.stops && this.state.stops.map(data => (
                            <h1 key={data.id}>{data.attributes.name}</h1>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default SubwayLines;