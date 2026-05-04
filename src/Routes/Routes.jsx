import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '../Component/Home';
import Hooks from '../Component/Hooks';
const Routes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/hooks' element={<Hooks/>}></Route>
            </Routes>
        </div>
    );
}

export default Routes;
