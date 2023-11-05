import React from 'react';
import { TbSquareRotatedFilled } from "react-icons/tb";

const PeopleComments = () => {
    return (
        <div className=' relative h-[600px]'>
            <img className=' h-[600px] w-full' src="https://i.ibb.co/wLvV8gS/03-GLASSIE-SUB-super-Jumbo.jpg" alt="" />
            <div className=' absolute w-full h-full top-0 bg-gradient-to-b from-black '>
            <div className='pt-20'>
                <h1 className=" text-center text-white text-4xl">What People<span className=" font-bold text-white">Say</span></h1>
                <p className="grid grid-cols-3 w-2/12 text-center items-center font-bold justify-center mx-auto my-3 m-0">
                    <hr className="border" />
                    <TbSquareRotatedFilled className=" text-4xl text-white w-full" />
                    <hr className="border" />
                </p>
                <p className="w-2/3 mt-3 mx-auto text-center text-gray-200">we are passionate about fostering a love for reading, learning, and community engagement. Established in 2021, we have been serving the local community and beyond, providing a diverse collection of books, digital resources, and educational programs.</p>
            </div>
            </div>
        </div>
    );
};

export default PeopleComments;