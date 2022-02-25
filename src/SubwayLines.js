import React from 'react';

const SubwayLines = () => {

    function buttonAction() {
        alert('Button Clicked');
    }

    return (
        <div>
            <h1 className="text-black text-2xl py-4 font-bold" >Massachusetts Bay Transportation Authority</h1>
            <button className="bg-white text-blue-600 text-sm font-semibold rounded-md px-3 py-2 shadow mt-2 sm:mt-0" onClick={buttonAction}>
                Click here to see all subway lines
            </button>
        </div>
    );
};

export default SubwayLines;