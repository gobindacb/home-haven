import { useEffect, useState } from "react";
import SegmentCard from '.././Segment/SegmentCard'

const Segment = () => {
    const [estates, setEstates] = useState(null);
    useEffect(() =>{
        const fetchEstates = async () => {
            const res = await fetch('/segment.json');
            const data = await res.json();
            setEstates(data);
        }

        fetchEstates();
    }, []);
    return (
        <div>
            <div className="mb-6 mt-6 flex flex-col gap-2 lg:flex-row justify-center items-center lg:justify-around">
            <h1 className="text-7xl font-semibold font-satisfy text-green-500">Segment</h1>
                <p className="w-1/2"><span className="font-bold">Home Haven</span> has been trailblazing the real estate industry for the last 28 years. Delivering iconic residential, commercial, condominium, vacation home, single home, and student residential</p>
                
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10">
                {
                estates?.map(estate => <SegmentCard
                key={estate.id}
                estate={estate}
                ></SegmentCard>)
                }
            </div>
        </div>
    );
};

export default Segment;