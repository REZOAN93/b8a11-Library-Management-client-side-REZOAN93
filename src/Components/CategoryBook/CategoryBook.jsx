import { Link, useNavigate } from "react-router-dom";

const CategoryBook = ({ categories }) => {
    const { categoryName, image, buttonLabel } = categories;
    const navigate = useNavigate()
    return (
       <div>
         <div className=" bg-white relative card shadow-xl flex-col  hover:bg-emerald-100 cursor-pointer">
            <figure className=" h-48 w-full">
                <img src={image} alt="Shoes" className=" rounded-t-xl h-48 w-full" />
            </figure>
            <div className=" absolute flex-grow text-white rounded-xl h-full w-full bg-gradient-to-b from-zinc-900">
                <h2 className=" p-2 text-2xl text-center pt-5 font-bold">{categoryName}</h2>
            </div>
           
        </div>
         <div className=" rounded-b-xl">
         <Link
             className="w-full bg-emerald-200 rounded-b-xl hover:bg-green-400 btn border-none rounded-none "
             to={`/category/${categoryName}`}
         >
             {buttonLabel}
         </Link>
     </div>
       </div>
    );
};

export default CategoryBook;