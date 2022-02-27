import React,{Component} from 'react';
import axios from "axios";

class SubwayLines extends Component {

    constructor(props) {
        super(props);
        this.state = {
            routes : [],
            stops : [],
        };
    }

    componentDidMount () {
        this.getSubwayLines()
        this.getSubwayStops()
    }

    getSubwayStops() {
        // alert('Button Clicked');
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
            <aside className="w-96">
                <div className="px-3 py-4 overflow-y-auto rounded bg-gray-200 dark:bg-gray-800">
                    { this.state.routes === null && <p>Loading routes...</p> }
                    {
                        this.state.routes &&
                        this.state.routes.map(data=> (
                            <div key={data.id}>
                                 <button className="flex flex-col items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full">
                                     <span className="">ID: {data.id}</span>
                                     <span>Name: {data.attributes.long_name}</span>
                                 </button>
                            </div>
                        ))
                    }
                </div>
            </aside>
        );
    }
}

export default SubwayLines;