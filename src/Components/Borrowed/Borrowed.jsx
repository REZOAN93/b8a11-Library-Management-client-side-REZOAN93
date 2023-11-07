import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { AuthContext } from '../Context/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';

const Borrowed = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [borrowed, setBorrowedBook] = useState([])
    const [thisUserData, setThisUserData] = useState([]);
   

    useEffect(() => {
        axiosSecure.get(`/userBorrowedBooks?email=${user?.email}`)
            .then(res => {
                setBorrowedBook(res.data)
                setThisUserData(res.data);
            })
    }, [axiosSecure, user.email])

    const handleDeleteData = (data) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Return it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteBorrowed/${data._id}`)
                    .then(res => {
                        if (res.data?.deletedCount > 0) {
                            const remaining = thisUserData.filter((na) => na._id !== data._id);
                            setBorrowedBook(remaining);
                            setThisUserData(remaining);
                            Swal.fire("Done!", "The Book is Return Successfully.", "success");
                        }
                        axiosSecure.put(`/returnBorrowed/${data.bookId}`)
                            .then(res => {
                                console.log(res.data)
                            })
                    })
            }
        });
    };
    // useEffect(() => {
    //     const userDAta = allData.filter((na) => na.emailUser == user.email);
    //     setThisUserData(userDAta);
    // }, [allData, user]);

    return (
        <div>
            <Header></Header>
            <div className="overflow-x-auto w-11/12 mx-auto my-10">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className=" hidden md:block lg:block">Book Information</th>
                            <th>Borrowed Date</th>
                            <th>Return Date</th>
                            {/* <th>Price</th> */}
                            <th></th>
                            <th></th>
                            {/* <th className="hidden md:block lg:block">Product Type</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {thisUserData.map((na) => (
                            <>
                                <tr>
                                    <th className="hidden md:block lg:block">
                                        <div className="flex items-center space-x-3">
                                            <div className="">
                                                <div className=" w-24">
                                                    <img className=' w-full' src={na.photoURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-xl">{na.name}</div>
                                                <div className=" opacity-50 text-base">{na.category}</div>
                                                <div className=" opacity-50 text-base">Author: {na.author}</div>
                                            </div>
                                        </div>
                                    </th>
                                    <td className=' text-base'>{na.OrderDate}</td>
                                    <td className=' text-base'>{na.returnDate}</td>
                                    {/* <td className=' text-base'>{na.price}</td> */}
                                    <td></td>
                                    <td></td>
                                    {/* <td className="hidden md:block lg:block">{na.category}</td> */}
                                    <td className=" cursor-pointer">
                                        <button onClick={() => handleDeleteData(na)} className=' btn btn-sm bg-green-500 text-white hover:bg-green-800'>Return</button>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Borrowed;