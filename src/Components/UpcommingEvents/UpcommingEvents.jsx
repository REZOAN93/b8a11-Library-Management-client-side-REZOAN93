import { TbSquareRotatedFilled } from "react-icons/tb";

const UpcommingEvents = () => {
    return (
        <div className=" ">
            <div>
                <h1 className=" text-center text-xl  lg:text-4xl">Upcoming <span className=" font-bold text-green-800">Events</span></h1>
                <p className="grid grid-cols-3 w-2/12 text-center items-center font-bold justify-center mx-auto my-3 m-0">
                    <hr className="border" />
                    <TbSquareRotatedFilled className=" text-4xl text-green-800 w-full" />
                    <hr className="border" />
                </p>
                <p className="lg:w-2/3 mt-3 px-3 lg:px-0 mx-auto text-center text-gray-500"> Dive into a world of words and wonder as we celebrate the magic of literature, featuring author talks, book signings, and interactive reading sessions.</p>
            </div>

            <div className=" grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl pt-10 mx-auto">
                <div>
                    <img src="https://i.ibb.co/hBn1cfQ/inner-image.png" alt="" />
                </div>
                <div className=" lg:col-span-2 pb-5 lg:pb-0 px-3 lg:px-0 space-y-8">
                    <div className=" space-y-3 mb-5">
                        <div className="flex justify-between">
                            <p>July 20,2024</p>
                            <p>02.30 Am</p>
                        </div>
                        <div className="rounded-lg py-4 px-4 bg-emerald-100 text-black lg:flex gap-10 text-justify ">
                            <img src="https://i.ibb.co/8Y18z0g/even-1.jpg" alt="" />
                            <div className=" space-y-5">
                                <p className=" font-bold">Tuesday Networking & Lecture</p>
                                <p>Join us for an engaging evening of learning, networking, and inspiration at our Tuesday Networking & Lecture event. Every Tuesday, we bring together professionals, enthusiasts, and experts from various fields to foster meaningful connections and facilitate knowledge exchange.</p>
                            </div>
                        </div>
                    </div>


                    <div className="  space-y-3 mb-5">
                        <div className="flex justify-between">
                            <p>January 10,2024</p>
                            <p>10.30 Am</p>
                        </div>
                        <div className=" rounded-lg py-4 px-4 bg-emerald-100 text-black lg:flex gap-10 text-justify ">
                            <img src="https://i.ibb.co/rfwqrxk/event-2.jpg" alt="" />
                            <div className=" space-y-5">
                                <p className=" font-bold">Interactive Discussions</p>
                                <p>Engage in interactive discussions and Q&A sessions after the lecture. Participate in stimulating conversations, ask questions, and gain valuable insights from both the speaker and fellow attendees.</p>
                            </div>
                        </div>
                    </div>
                    <div className="  space-y-3 mb-5">
                        <div className="flex justify-between">
                            <p>February 14,2024</p>
                            <p>11.30 Am</p>
                        </div>
                        <div className=" rounded-lg py-4 px-4 bg-emerald-100 text-black lg:flex gap-10 text-justify ">
                            <img src="https://i.ibb.co/8Y18z0g/even-1.jpg" alt="" />
                            <div className=" space-y-5">
                                <p className=" font-bold">Poetry Jam: Voices of the Soul!</p>
                                <p>Immerse yourself in the beauty of spoken word and lyrical expressions. Experience an evening of poetry readings, open mic sessions, and live performances, celebrating the power of poetic voices.</p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex justify-end">
                        <button className="btn bg-emerald-100 text-black font-bold hover:bg-emerald-800 hover:text-white px-20 py-4">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcommingEvents;