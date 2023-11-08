import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import CategoryBook from "../CategoryBook/CategoryBook";
import MoreAbout from "../MoreAbout/MoreAbout";
import About from "../About/About";
import UpcommingEvents from "../UpcommingEvents/UpcommingEvents";
import PeopleComments from "../PeopleComments/PeopleComments";


const Home = () => {
    const axiosSecure = useAxiosSecure();
    const [category, setCategories] = useState([])
    useEffect(() => {
        axiosSecure.get('/bookCategory')
            .then(res => setCategories(res.data))
    }, [axiosSecure])

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="max-w-7xl mt-10 mx-auto">
                <p className=" lg:text-center ps-16 underline underline-offset-4 lg:ps-0 mb-3 lg:mb-10 font-bold lg:text-4xl">Our Category</p>
                <div className=" grid grid-cols-1 mx-16 lg:mx-0 lg:grid-cols-4  gap-5 ">
                    {category.map(na => <CategoryBook key={na._id} categories={na}></CategoryBook>)}
                </div>
            </div>
            <div className=" my-16">
                <About></About>
            </div>
            <MoreAbout></MoreAbout>
            <div className=" pt-10">
                <UpcommingEvents></UpcommingEvents>
            </div>
            <PeopleComments></PeopleComments>
        </div>
    );
};

export default Home;