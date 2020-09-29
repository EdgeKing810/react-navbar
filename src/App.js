import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import useWindowSize from './useWindowSize';

export default function App() {
    const history = useHistory();
    const { width } = useWindowSize();

    const [showList, setShowList] = useState(false);

    const navElements = ['Sign Up', 'About', 'Contact Us', 'Services', 'Home'];
    let listElements = navElements.map((el, i) => (
        <div className="flex p-2 text-xl text-blue-100 mx-2 font-mono hover:bg-blue-400 rounded" key={`nav-${i}`}>{el}</div>
    ))

    const collapsedMobileList = navElements.map((el, i) => (
        <div className="flex justify-center text-blue-900 p-2 text-xl font-mono bg-blue-400 border-b-2 border-blue-300 w-full text-center" key={`nav-${i}`}>{el}</div>
    ));

    if (width < 600) {
        listElements = <button className="ri-menu-line text-blue-100 text-2xl" onClick={() => setShowList(prev => !prev)} />
    }

    return(
        <div className="w-full">
            <div className="w-full bg-blue-500 p-4 flex">
                <button className="flex w-1/2 text-2xl font-bold text-blue-100 tracking-wider"
                        onClick={() => history.push('/')}
                >
                    <p>React</p>
                    <i className="ml-2 ri-reactjs-line"></i>
                </button>
                <div className="flex flex-row-reverse w-1/2">
                    {listElements}
                </div>
            </div>
            <div className={`flex flex-col-reverse transform ${showList ? 'translate-y-0 ease-out duration-500' : '-translate-y-screen ease-in duration-500 opacity-0'}`}>{collapsedMobileList}</div>
        </div>
    );
}
