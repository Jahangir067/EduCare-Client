import { useEffect, useState } from "react";
import {  useLoaderData } from "react-router-dom";

const Details = () => {
    const [college, setCollege] = useState();
    const id = useLoaderData()

    useEffect(() => {
        fetch(`http://localhost:5000/colleges/${id}`)
            .then(res => res.json())
            .then(data => {
                setCollege(data)
                console.log(data)
            })

    }, [id])

    return (
        <>
        <h3 className="text-3xl text-center my-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-900 to-violet-500 font-bold">See Details About College</h3>
            <div className="hero max-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={college?.collegeImg} className="max-w-xl rounded-lg shadow-2xl" />
                    <div className="ms-8">
                        <h1 className="text-5xl font-bold">{college?.collegeName}</h1>
                        <p className="py-6">{college?.researchHistory}</p>
                        <button className="btn btn-primary">Admission Now</button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center max-w-screen h-screen">

                <div className="w-full max-w-screen-sm">
                    <button className="w-full border-b-2 border-gray-300 pb-6 text-left group focus:outline-none">
                        <div className="text-lg font-semibold">{college?.event}</div>
                        <div className="mt-3 hidden text-gray-700 group-focus:flex">
                            <p>{college?.events}</p>
                        </div>
                    </button>
                    <button className="w-full border-b-2 border-gray-300 pb-6 text-left group mt-6 focus:outline-none">
                        <div className="text-lg font-semibold">{college?.research}</div>
                        <div className="mt-3 hidden text-gray-700 group-focus:flex">
                            <p>{college?.researchWorks}</p>
                        </div>
                    </button>
                    <button className="w-full border-b-2 border-gray-300 pb-6 text-left group mt-6 focus:outline-none">
                        <div className="text-lg font-semibold">{college?.sport}</div>
                        <div className="mt-3 hidden text-gray-700 group-focus:flex">
                            <p>{college?.sports}</p>
                        </div>
                    </button>
                </div>

            </div>

        </>
    );
};

export default Details;
