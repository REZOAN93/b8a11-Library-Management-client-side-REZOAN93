import Header from '../Header/Header';
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';

const AddBooks = () => {
    const axiosSecure = useAxiosSecure();

    const handleAddBook = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const category = form.category.value;
        const author = form.author.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photoURL = form.photoURL.value;
        const qty = form.qty.value;
        const details = form.details.value;
        const singleBook = { name, price, category, author, description, photoURL, rating, qty, details };
        console.log(singleBook)
        axiosSecure.post('/addbook', singleBook)
            .then(res => {
                if (res.data?.insertedId) {
                    form.reset();
                    Swal.fire({
                        title: "Book is added Successfully",
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

    // const [selectedProduct, setSelectedProduct] = useState("");
    // const handleProductChange = (event) => {
    //     setSelectedProduct(event.target.value);
    // };

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
            <div className=' border-t-4'>
                <div className=" max-w-5xl mx-auto space-y-3">
                    <div id="productContainer" className=" rounded-lg py-8">
                        <div className=" space-y-4">
                            <h1 className="font-titleFont mb-2 text-3xl text-center font-extrabold saturate-200">
                                Add New Books
                            </h1>
                        </div>
                        <div className="px-10">
                            <form onSubmit={handleAddBook} className=" space-y-3">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <div className="join">
                                            <input
                                                type="text"
                                                name="name"
                                                className="input input-bordered join-item w-full"
                                                placeholder="Enter Book name"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <div className="join">
                                            <input
                                                type="number"
                                                name="price"
                                                className="input input-bordered join-item w-full"
                                                placeholder="Enter Book Price"
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
                                                <option value="" disabled>
                                                    Select Category Name
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
                                            />
                                        </div>
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
                                                <option value="" disabled>
                                                    Select Rating
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
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Details Description</span>
                                    </label>
                                    <div className="join">
                                        <textarea type="text" name="details" className="textarea input input-bordered join-item w-full h-24" placeholder="Book Details Description"></textarea>

                                    </div>
                                </div>
                                <div className="form-control">
                                    <input
                                        className=" bg-emerald-700 w-full text-white text-2xl cursor-pointer hover:bg-emerald-800 mt-5 p-2 rounded-lg font-titleFont font-bold text-bgBtn"
                                        type="submit"
                                        value="Add Book"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <Link
                        className="font-titleFont flex gap-3 justify-end drop-shadow-md font-bold lg:text-2xl"
                        to={"/"}
                    >
                        {" "}
                        <span className=" font-extrabold">
                            <BsArrowLeft /> 
                        </span>{" "}
                        Back to Home
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default AddBooks;