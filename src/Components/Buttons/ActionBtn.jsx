import React from 'react';

const ActionBtn = ({title}) => {
    return (
        
            <button
             className="text-white uppercase w-full justify-center mt-3 bg-gradient-to-r from-accent to-violet-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-[#f21df2]/60 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 mr-2 mb-2">
                {title}
             </button>
        
    );
};

export default ActionBtn;