import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

function Loader() {
    return (
        <div className="loader">
            <RotatingLines
                strokeColor="steelblue"
                strokeWidth="3"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    )
}

export default Loader
