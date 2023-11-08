import {useEffect, useState } from 'react';
import Header from '../Header/Header';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import AllBookCard from './AllBookCard';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const AllBooks = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [allBooks, setAllBooks] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [filterActive, setFilterActive] = useState(false);

    useEffect(() => {
        axiosSecure.get(`/allBooks?email=${user?.email}`)
            .then(res => {
                setAllBooks(res.data)
                setFilteredBooks(res.data);
            })
    }, [axiosSecure, user?.email])

    const handleFilterToggle = () => {
        setFilterActive(!filterActive);
        if (!filterActive) {
            setFilteredBooks(allBooks.filter(book => book.qty > 0));
        } else {
            setFilteredBooks(allBooks);
        }
    };

    return (
        <div>
            <Header></Header>
            <div className=' border-b-2 border-t-2 py-2 flex justify-start'>
                <button onClick={handleFilterToggle} className=' btn bg-green-500 text-white hover:bg-lime-700'>Filter based on available qty</button>
            </div>
            <div>
                <div className="max-w-7xl py-10 mx-auto">
                    <div className=" grid grid-cols-1 px-2 lg:px-0 lg:grid-cols-3 mb-10  gap-4">
                        {filteredBooks?.length > 0 ? (
                            <>
                                {filteredBooks?.map((book) => (
                                    <AllBookCard key={book._id} data={book}></AllBookCard>
                                ))}
                            </>
                        ) : (
                            <>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBooks;