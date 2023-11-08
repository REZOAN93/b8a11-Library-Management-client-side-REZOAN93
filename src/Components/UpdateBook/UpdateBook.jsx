import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import { useState } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import Swal from 'sweetalert2';

const UpdateBook = () => {
    const data = useLoaderData()
    const axiosSecure = useAxiosSecure();
    const { _id, name, price, category, author, description, photoURL, bookLink, rating, qty, details } = data;

    const handleUpdateBook = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const category = form.category.value;
        const author = form.author.value;
        const description = form.description.value;
        const ratingstring = form.rating.value;
        const rating = parseInt(ratingstring)
        const photoURL = form.photoURL.value;
        const bookLink = form.bookLink.value;
        const qtystring = form.qty.value;
        const qty = parseInt(qtystring)
        const details = form.details.value;
        const updateBook = { name, price, category, author, description, photoURL, rating, qty, details, bookLink };
        // console.log(updateBook)
        axiosSecure.put(`/updateBook/${_id}`, updateBook)
            .then(res => {
                console.log(res.data)
                if (res.data?.modifiedCount > 0) {
                    Swal.fire({
                        title: "Book is Updated Successfully",
                        showClass: {
                            popup: "animate__animated animate__fadeInDown",
                        },
                        hideClass: {
                            popup: "animate__animated animate__fadeOutUp",
                        },
                    });
                }
            })
    };

    const optionsArray = [
        { value: "Fiction", label: "Fiction" },
        { value: "Science-Fiction", label: "Science-Fiction" },
        { value: "Mystery", label: "Mystery" },
        { value: "Fantasy", label: "Fantasy" },
        { value: "Romance", label: "Romance" },
        { value: "Non-Fiction", label: "Non-Fiction" },
        { value: "Biography", label: "Biography" },
        { value: "History", label: "History" },
        { value: "Self-Help", label: "Self-Help" },
        { value: "Cooking", label: "Cooking" },
        { value: "Travel", label: "Travel" },
    ];
    const [selectedcategory, setSelectedCategory] = useState("");
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const [selectedRating, setSelectedRating] = useState("");

    const handleRatingChange = (event) => {
        setSelectedRating(event.target.value);
    };
    return (
        <div>
            <Header></Header>
            <div className=" py-2 bg-slate-100 mb-2">
                <h1 className="font-titleFont mb-2 text-3xl text-center font-extrabold saturate-200">
                    Update Books
                </h1>
            </div>
            <div className=" max-w-7xl mx-auto">
                <form onSubmit={handleUpdateBook} className=" space-y-3 pb-20">
                    <div className=' grid lg:grid-cols-3 gap-5'>
                        <div className='pt-8'>
                            <div className=' h-[300px] flex justify-center'>
                                <img className=' h-[300px]' src={photoURL} alt="" />
                            </div>
                            <div className="form-control mt-3">
                                <label className="label">
                                    <span className="label-text">Book URL (Pdf Link)</span>
                                </label>
                                <div className="join">
                                    <input
                                        name="bookLink"
                                        className="input input-bordered join-item w-full"
                                        type="url"
                                        placeholder="Enter photo URL"
                                        defaultValue={bookLink}
                                    />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Details Description</span>
                                </label>
                                <div className="join">
                                    <textarea type="text" defaultValue={details} name="details" className="textarea input input-bordered join-item w-full h-20" placeholder="Book Details Description"></textarea>

                                </div>
                            </div>
                        </div>
                        <div className="form-control w-full p-3 col-span-2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <div className="join">
                                <input
                                    type="text"
                                    name="name"
                                    className="input input-bordered join-item w-full"
                                    placeholder="Enter Book name"
                                    defaultValue={name}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <div className="join">
                                    <input
                                        type="text"
                                        name="price"
                                        className="input input-bordered join-item w-full"
                                        placeholder="Enter Book Price"
                                        defaultValue={price}
                                    />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category Name</span>
                                </label>
                                <div className="join">
                                    <select
                                        name="category"
                                        id="category"
                                        className="select select-bordered w-full"
                                        value={selectedcategory}
                                        onChange={handleCategoryChange}
                                    >
                                        <option>
                                            {category}
                                        </option>
                                        {optionsArray.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Author Name</span>
                                </label>
                                <div className="join">
                                    <input
                                        type="text"
                                        name="author"
                                        className="input input-bordered join-item w-full"
                                        placeholder="Enter Author Name"
                                        defaultValue={author}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Short description</span>
                                    </label>
                                    <div className="join">
                                        <input
                                            type="text"
                                            name="description"
                                            className="input input-bordered join-item w-full"
                                            placeholder="Enter Short description"
                                            defaultValue={description}
                                        />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <div className="join">
                                        <select
                                            id="rating"
                                            name="rating"
                                            className="select select-bordered w-full"
                                            value={selectedRating}
                                            onChange={handleRatingChange}
                                        >
                                            <option>
                                                {rating}
                                            </option>
                                            {[...Array(10)].map((_, index) => (
                                                <option key={index + 1} value={index + 1}>
                                                    {index + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Book Image</span>
                                    </label>
                                    <div className="join">
                                        <input
                                            name="photoURL"
                                            className="input input-bordered join-item w-full"
                                            type="url"
                                            placeholder="Enter photo URL"
                                            defaultValue={photoURL}
                                        />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Quantity of the book</span>
                                    </label>
                                    <div className="join">
                                        <input
                                            type="number"
                                            name="qty"
                                            className="input input-bordered join-item w-full"
                                            placeholder="Enter the Quantity of the book"
                                            defaultValue={qty}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-control">
                                <input
                                    className=" bg-emerald-700 w-full text-white text-2xl cursor-pointer hover:bg-emerald-800 mt-5 p-2 rounded-lg font-titleFont font-bold text-bgBtn"
                                    type="submit"
                                    value="Update Book"
                                />
                            </div>
                        </div>
                    </div>

                </form>
            </div >
        </div >
    );
};

export default UpdateBook;