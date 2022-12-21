import React from 'react';
import { FaCartPlus } from "react-icons/fa";

const ActionBtn2 = ({title}) => {
    return (
            
        <button
        className="text-white uppercase w-full justify-center mt-3 bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:primary/60 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
             <FaCartPlus className='mr-2'/> {title}
        </button>
    );
};

export default ActionBtn2;