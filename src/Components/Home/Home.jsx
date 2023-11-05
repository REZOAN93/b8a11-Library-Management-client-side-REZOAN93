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
    console.log(category)

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="max-w-7xl mt-10 mx-auto">
                <p className=" text-center mb-10 font-bold text-4xl">Our Category</p>
                <div className=" grid grid-cols-4  gap-5 ">
                    {category.map(na => <CategoryBook key={na._id} categories={na}></CategoryBook>)}
                </div>
            </div>
            <div className=" my-16">
                <About></About>
            </div>
            <MoreAbout></MoreAbout>
            <div className=" pt-10 bg-slate-50">
                <UpcommingEvents></UpcommingEvents>
            </div>
            <PeopleComments></PeopleComments>
        </div>
    );
};

export default Home;