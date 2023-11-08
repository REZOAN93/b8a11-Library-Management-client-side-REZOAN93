import React from 'react';
import ReactPlayer from 'react-player'

const MoreAbout = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-3 my-10 max-w-7xl mx-auto'>

            <div className=''>
                <ReactPlayer
                    width='100%'
                    // playing={true}
                    height='100%'
                    url='https://www.youtube.com/watch?v=tlmIrkWPA4s&t=6s' />
            </div>
            <div className='px-3 lg:px-0 text-justify space-y-3 lg:pl-5'>
                <h1 className=' lg:text-4xl font-bold lg:pb-5'>For the Love of Reading</h1>
                <div>
                    <p className=' font-bold text-lg'>Selection</p>
                    <p>We have more than 13 million titles to choose from, from the earliest board books to the all-time classics of literature.</p>
                </div>
                <div>
                    <p className=' font-bold text-lg'>Purchasing Power</p>
                    <p>Used books are often treasures that are out-of-print or rare. With Wish Lists you can choose to be notified the instant we find a copy, see how often we find rare titles, and see who else is interested.</p>
                </div>
                <div>
                    <p className=' font-bold text-lg'>FREE Shipping & More</p>
                    <p>When you've found the books you want we'll ship qualifying orders to your door for FREE in 100% recyclable packaging. If there is no demand for a book, we will donate it to charity, or we'll recycle it.</p>
                </div>
                <button className=' btn bg-emerald-700 text-white hover:bg-emerald-800 '>More About Us</button>
            </div>
        </div>
    );
};

export default MoreAbout;