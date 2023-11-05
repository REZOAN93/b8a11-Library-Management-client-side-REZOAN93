import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { TbSquareRotatedFilled } from "react-icons/tb";
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';

const PeopleComments = () => {
    const axiosSecure = useAxiosSecure();
    const [comments, setComments] = useState([])
    useEffect(() => {
        axiosSecure.get('/comments')
            .then(res => setComments(res.data))
    }, [axiosSecure])
    return (
        <div className=' relative'>
            <img className=' h-full w-full' src="https://i.ibb.co/wLvV8gS/03-GLASSIE-SUB-super-Jumbo.jpg" alt="" />
            <div className=' absolute w-full h-full top-0 bg-gradient-to-b from-black '>
                <div className='pt-20'>
                    <h1 className=" text-center text-white text-4xl">What People <span className=" font-bold text-white">Say</span></h1>
                    <p className="grid grid-cols-3 w-2/12 text-center items-center font-bold justify-center mx-auto my-3 m-0">
                        <hr className="border" />
                        <TbSquareRotatedFilled className=" text-4xl text-white w-full" />
                        <hr className="border" />
                    </p>
                    <p className=" w-3/4 mt-3 mx-auto text-center text-gray-200">Discover the heartwarming stories and experiences shared by our valued patrons. In this section, we proudly present the voices of our community members, expressing their thoughts, appreciation, and gratitude for the services, resources, and experiences they've had at our library. Read firsthand accounts of how our library has made a difference in their lives, inspiring lifelong learning, fostering connections, and nurturing a love for literature. Join us in celebrating the power of knowledge and the impact it has on our community.</p>
                </div>
                <div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="swiper"
                    >
                        {
                            comments.map(na => <>
                                <SwiperSlide key={na._id}>
                                    <div className=' text-center space-y-4 mt-10'>
                                        <p className=' font-bold text-white text-5xl'>{na.name}</p>
                                        <p className='mx-auto font-bold text-white text-2xl'>{na.studentStatus}</p>
                                        <p className=' w-1/2 text-justify mx-auto text-white text-xl'>{na.comments}</p>
                                        <div className='flex items-center justify-center'>
                                            <div className=' border-4 rounded-full w-52 h-52'>
                                                <img className=' w-full h-full rounded-full' src={na.picture} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PeopleComments;