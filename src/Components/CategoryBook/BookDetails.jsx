import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Header from '../Header/Header';



const BookDetails = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    // const emailUser = user?.email;
    // console.log(user.email);
    console.log(data)


    const { _id, name, price, category, author, description, photoURL, rating, qty, details } = data;

    const handleAddToCart = (event) => {
        event.preventDefault();
        const userProduct = {
            emailUser, name, price, category, author, description, photoURL, rating, qty, details
        };
        //   fetch(
        //     "https://10-17-2023-b8-a10-brand-shop-server-side-rezoan-93-hljb1lf39.vercel.app/userProducts",
        //     {
        //       method: "POST",
        //       headers: { "content-type": "application/json" },
        //       body: JSON.stringify(userProduct),
        //     }
        //   )
        //     .then((res) => res.json())
        //     .then((data) => {
        //       Swal.fire({
        //         title: "Added to your Cart Successfully",
        //         showClass: {
        //           popup: "animate__animated animate__fadeInDown",
        //         },
        //         hideClass: {
        //           popup: "animate__animated animate__fadeOutUp",
        //         },
        //       });
        //     });
    };

    const mappedRating = Math.min(Math.max(rating, 1), 10); // Ensure rating is between 1 and 10
    const visualRating = Math.ceil(mappedRating); // Map 1-10 scale to 1-5 scale
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <div className=' grid grid-cols-4 py-10'>
                <div className='border bg-slate-200 rounded-lg col-span-3'>
                    <div className=' grid grid-cols-3 gap-10'>
                        <div className=' p-2'>
                            <img src={photoURL} alt="" />
                        </div>
                        <div className=' col-span-2 space-y-5'>
                            <div className=' space-y-2'>
                                <p className=' font-bold text-2xl'>{name}</p>
                                <p>by <span className=' font-bold'>{author}</span></p>
                                <p>{details}</p>
                            </div>
                            <div>
                                <div className="rating flex items-center">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <input
                                            key={index}
                                            type="radio"
                                            name="rating-2"
                                            className={`mask mask-star-2 text-yellow-400 ${index < visualRating ? "bg-yellow-400" : "bg-gray-400"
                                                }`}
                                        />
                                    ))}
                                    <p className='ml-3 font-bold'>See Customer Reviews</p>
                                </div>
                            </div>
                            <div>
                                <p className='mb-3 font-bold text-xl'>Select Format</p>
                                <div className=' flex gap-3'>
                                    <div className=' bg-green-300 rounded-lg font-bold p-2 btn-outline hover:bg-green-500 cursor-pointer'><p>Hard Cover</p></div>
                                    <div className=' bg-green-300 rounded-lg font-bold p-2 btn-outline hover:bg-green-500 cursor-pointer'><p>Paper Back</p></div>
                                    <div className=' bg-green-300 rounded-lg font-bold p-2 btn-outline hover:bg-green-500 cursor-pointer'><p>Audio CD</p></div>
                                    <div className=' bg-green-300 rounded-lg font-bold p-2 btn-outline hover:bg-green-500 cursor-pointer'><p>Library Binding</p></div>
                                </div>
                            </div>
                            <div>
                                <p className='mb-3 font-bold text-xl'>Select Condition</p>
                                <div className=' flex gap-3'>
                                    <div className=' bg-green-300 rounded-lg font-bold p-2 btn-outline hover:bg-green-500 cursor-pointer'><p>Like New</p></div>
                                    <div className=' bg-green-300 rounded-lg font-bold p-2 btn-outline hover:bg-green-500 cursor-pointer'><p>Very Good</p></div>
                                    <div className=' bg-green-300 rounded-lg font-bold p-2 btn-outline hover:bg-green-500 cursor-pointer'><p>Good</p></div>
                                    <div className=' bg-green-300 rounded-lg font-bold p-2 btn-outline hover:bg-green-500 cursor-pointer'><p>Acceptable</p></div>
                                    <div className=' bg-green-300 rounded-lg font-bold p-2 btn-outline hover:bg-green-500 cursor-pointer'><p>New</p></div>
                                </div>
                            </div>
                            <div className='pe-10'>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-2'>
                    {/* <h1>Card Part</h1> */}
                    <button onClick={() => document.getElementById('my_modal_1').showModal()} className=' bg-green-500 hover:bg-green-900 rounded-lg text-2xl font-bold text-white py-5  w-full mb-5 p-2'>Borrow</button>
                    <button className=' bg-green-500 hover:bg-green-900 rounded-lg text-2xl font-bold text-white py-5  w-full mb-5 p-2'>Read</button>
                </div>
            </div>
            {/* Modal Data */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );

};


export default BookDetails;