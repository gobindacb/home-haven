import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Helmet } from "react-helmet-async";




const EstateDetails = () => {
    const { id } = useParams(); // Get the ID from the URL params
    const [estate, setEstate] = useState(null); // State to hold the fetched estate data

    useEffect(() => {
        // Fetch data from '/estate.json'
        fetch('/estate.json')
            .then(response => response.json())
            .then(data => {
                // Find the estate with the matching ID
                const estateData = data.find(item => item.id === parseInt(id));
                if (estateData) {
                    setEstate(estateData); // Update state with the fetched estate data
                } else {
                    console.error('Estate not found');
                }
            })
            .catch(error => console.error('Error:', error));
    }, [id]); // Fetch data whenever the ID changes

    // Render the estate details

    return (
        <div>
            <Helmet>
                <title>
                    Home Haven | Estate-Details
                </title>
            </Helmet>
            {estate ? (
                <div className="grid lg:grid-cols-12 gap-1">
                    <div className="col-span-12 lg:col-span-2 border-2">
                        <div className="space-y-2 grid grid-cols-3 lg:grid-cols-1 gap-2 text-center lg:text-left">
                            <div>
                                <p className="text-sm text-green-600">Segment</p>
                                <h4 className="text-lg">{estate.segment_name}</h4>
                            </div>
                            <div>
                                <p className="text-sm text-green-600">Area</p>
                                <h4 className="text-lg">{estate.area}</h4>
                            </div>
                            <div>
                                <p className="text-sm text-green-600">Build in</p>
                                <h4 className="text-lg">{estate.building_established_year}</h4>
                            </div>
                            <div>
                                <p className="text-sm text-green-600">Build by</p>
                                <h4 className="text-lg">{estate.developer_company}</h4>
                            </div>
                            <div>
                                <p className="text-sm text-green-600">Price</p>
                                <h4 className="text-lg">{estate.price}</h4>
                            </div>
                            <div>
                                <p className="text-sm text-green-600">Type</p>
                                <h4 className="text-lg">{estate.status}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 border-2 space-y-2">
                        <div>
                            <h2 className="text-3xl font-bold text-center">{estate.estate_title}</h2>
                            <img src={estate.photo} alt="" />
                            <p>{estate?.description}</p>
                        </div>
                        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                                <img src={estate.photo} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={estate.image1} />
                                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={estate.image2} />
                                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={estate.image3} />
                                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={estate.image4} />

                            </div>
                        </section>
                    </div>
                    <div className="col-span-12 lg:col-span-4 border-2 space-y-2">
                        <div>
                            <p className="text-sm text-green-600">Facilities</p>
                            <div className="flex justify-evenly">
                            {
                                estate.facilities.map(facility => <ul
                                key={facility.index}
                                
                                >
                                    <li className="bg-green-300 rounded-full border-2">{facility}</li>
                                </ul>)
                            }
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-green-600">Location</p>
                            <h4 className="text-lg">{estate.location}</h4>
                        </div>
                        <div className="w-full h-96 sm:h-full">
                            <MapContainer center={estate.position} zoom={13} style={{ height: '100vh', width: '100%' }}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={estate.position}>
                                    <Popup>
                                        {estate.estate_title}
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default EstateDetails;