import { TbSquareRotatedFilled } from "react-icons/tb";
import { AiOutlineIdcard } from "react-icons/ai";
import { FaMedal } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { RiBookMarkLine } from "react-icons/ri";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';


const About = () => {
    const axiosSecure = useAxiosSecure();
    const [slider, setSlider] = useState([])
    useEffect(() => {
        axiosSecure.get('/about')
            .then(res => setSlider(res.data))
    }, [axiosSecure])
    return (
        <div>
            <div>
                <h1 className=" text-center text-4xl">About <span className=" font-bold text-green-800">Us</span></h1>
                <p className="grid grid-cols-3 w-2/12 text-center items-center font-bold justify-center mx-auto my-3 m-0">
                    <hr className="border" />
                    <TbSquareRotatedFilled className=" text-4xl text-green-800 w-full" />
                    <hr className="border" />
                </p>
                <p className="lg:w-2/3 px-3 lg:px-0 mt-3 mx-auto text-center text-gray-500">we are passionate about fostering a love for reading, learning, and community engagement. Established in 2021, we have been serving the local community and beyond, providing a diverse collection of books, digital resources, and educational programs.</p>
            </div>
            <div className=" grid grid-cols-1 lg:px-0 lg:grid-cols-2 max-w-7xl mx-auto my-10">
                <div className=" grid lg:grid-cols-2 px-5 lg:px-0 gap-4 text-justify">
                    <div className=" space-y-5">
                        <div className=" flex items-center gap-2 text-green-800 ">
                            <AiOutlineIdcard className=" text-3xl" />
                            <p className=" font-bold text-xl mb-2">Member Card</p>
                        </div>
                        <p className=" text-sm text-gray-500">Become a member and gain exclusive privileges. With a library card, you can access a world of knowledge at your fingertips. Borrow books, participate in events, and explore our digital resources. Membership is free and open to all.</p>
                    </div>
                    <div className="space-y-5">
                        <div className=" flex items-center gap-2 text-green-800">
                            <FaMedal className=" text-3xl" />
                            <p className="font-bold text-xl mb-2">High Quality Books</p>
                        </div>
                        <p className=" text-sm text-gray-500">Discover a curated collection of high-quality books meticulously selected to cater to various interests and age groups. Our library boasts a diverse range of genres, from classic literature to contemporary bestsellers, ensuring there's something for every reader.</p>
                    </div>
                    <div className="space-y-5">
                        <div className=" flex items-center gap-2 text-green-800 ">
                            <FaBookReader className=" text-3xl" />
                            <p className="font-bold text-xl mb-2">Free All Books</p>
                        </div>
                        <p className=" text-sm text-gray-500">We believe in the power of knowledge and its ability to transform lives. That's why we offer free access to all our books. Whether you're a student, a professional, or a leisure reader, our library welcomes everyone to explore and borrow books without any cost.</p>
                    </div>
                    <div className="space-y-5">
                        <div className=" flex items-center gap-2 text-green-800 ">
                            <RiBookMarkLine className=" text-3xl" />
                            <p className="font-bold text-xl mb-2">Up To Date Books</p>
                        </div>
                        <p className=" text-sm text-gray-500">Stay ahead with our constantly updated catalog. We pride ourselves on offering the latest releases and up-to-date editions. Our team is committed to keeping our collection current, ensuring you have access to the most recent publications and valuable resources.</p>
                    </div>
                </div>
                <div className=" lg:px-24 px-16">
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        {
                            slider.map(na => <>
                                <SwiperSlide className=' w-full mt-10' key={na._id}>
                                    <div className=''>
                                        <img className=' rounded-lg' src={na.url} alt="" />
                                        <div className='w-full  absolute top-0 text-center space-y-16 pt-20 h-full'>
                                            {/* <p className=' font-bold text-white text-6xl'>{na.title}</p>
                                            <p className=' w-1/2 mx-auto font-bold text-white text-xl'>{na.subtitle}</p> */}
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

export default About;