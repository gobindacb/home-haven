import { useLoaderData } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import EstateCard from "../../components/Estate/EstateCard";
import Segment from "../../components/Segment/Segment";
import OurTeam from "../../components/OurTeam/OurTeam";
import { Helmet } from "react-helmet-async";


const Home = () => {
    const estate = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>
                    Home Haven | Home
                </title>
            </Helmet>
            <div className="relative">
                <div className="overflow-hidden">
                    <Slider></Slider>
                </div>
                <div className="absolute w-full lg:w-1/2 -mb-10 bottom-0 left-0 lg:left-8 right-0 z-10 bg-gray-500 p-4 flex items-center opacity-70 justify-center gap-2 rounded-full">
                    <select className="select select-error w-1/3">
                        <option disabled selected>Type</option>
                        <option>Strapi</option>
                        <option>Ghost</option>
                        <option>Netlify CMS</option>
                        <option>Sanity</option>
                    </select>
                    <select className="select select-error w-1/3">
                        <option disabled selected>Location</option>
                        <option>Strapi</option>
                        <option>Ghost</option>
                        <option>Netlify CMS</option>
                        <option>Sanity</option>
                    </select>
                    <select className="select select-error w-1/3">
                        <option disabled selected>Range</option>
                        <option>Strapi</option>
                        <option>Ghost</option>
                        <option>Netlify CMS</option>
                        <option>Sanity</option>
                    </select>
                    <button className="btn bg-green-500 text-white font-semibold">Search</button>
                </div>
            </div>
            <div className="mt-16">
            <div className="mb-6 flex flex-col gap-2 lg:flex-row justify-center items-center lg:justify-around">
                <p className="w-1/2">Home Haven has been trailblazing the real estate industry for the last 28 years. Delivering iconic residential, commercial, condominium, vacation home, single home, and student residential</p>
            <h1 className="text-7xl font-semibold font-satisfy text-green-500">Latest Estate</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                estate.map(est => <EstateCard
                key={est.id}
                est={est}
                ></EstateCard>)
            }
            </div>
            </div>
            <Segment></Segment>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;