import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between w-3/4 mx-auto'>
            <Link to='/'>
            <h2>Title and Logo</h2>
            </Link>

            <div>
                <Link to='/blogs'>Blogs</Link>
            </div>
        </div>
    );
};

export default Navbar;