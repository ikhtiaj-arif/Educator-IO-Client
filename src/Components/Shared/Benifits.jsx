import React from 'react';
import { FaRegHandPointRight, FaCartPlus } from "react-icons/fa";



const Benifits = () => {
    
const category = [
    {
        title: 'xxx',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit',
        icon: <FaRegHandPointRight/>
        
    },
    {
        title: 'xxx',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit',
        icon: <FaCartPlus/>
        
    },
    {
        title: 'xxx',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit',
        icon: <FaRegHandPointRight/>
        
    },
    {
        title: 'xxx',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit',
        icon: <FaCartPlus/>
        
    },
    {
        title: 'xxx',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit',
        icon: <FaCartPlus/>
        
    },
    {
        title: 'xxx',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit',
        icon: <FaCartPlus/>
        
    },
    {
        title: 'xxx',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit',
        icon: <FaCartPlus/>
        
    },
    {
        title: 'xxx',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit',
        icon: <FaCartPlus/>
        
    },
    {
        title: 'xxx',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit',
        icon: <FaCartPlus/>
        
    },
]


    return (
        
   <div className='w-3/4 mx-auto grid md:grid-cols-3'>
    {
        category.map((item, ix)=>  <div key={ix} className='flex p-4'>
        <div className=' text-3xl pt-4 px-4'>{item.icon}</div>
        <div>
            <h1 className='text-2xl font-bold py-3'>{item.title}</h1>
            <p>{item.text}</p>
        </div>
    </div>)
    }
        
   </div>
    );
};

export default Benifits;