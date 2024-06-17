import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { Helmet } from 'react-helmet-async';
import logo from '../../assets/logo.png';
import {phoneSquare} from 'react-icons-kit/fa/phoneSquare';
import {facebookSquare} from 'react-icons-kit/fa/facebookSquare';
import {globe} from 'react-icons-kit/fa/globe'

import Icon from 'react-icons-kit';


const About = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            <Helmet>
                <title>
                    Home Haven | About
                </title>
            </Helmet>
            <div>
                <img src={logo} alt="" />
                <h3 className='text-xl my-8'>Home Haven is a real estate company. Since 1992 we provide more than 2300 home for our clients. Our main office in new york city.</h3>
                <div className='divider'><h4 className='text-5xl text-center font-bold font-satisfy text-green-400'>You can find us on</h4></div>
                <div className='flex items-center gap-3'>
                <Icon icon={phoneSquare} size={44}/>
                <p className='text-xl'>+1 000 0001 0002</p>
                </div>
                <div className='flex items-center gap-3'>
                <Icon icon={facebookSquare} size={44}/>
                <p className='text-xl'>www.facebook/home-haven</p>
                </div>
                <div className='flex items-center gap-3'>
                <Icon icon={globe} size={44}/>
                <p className='text-xl'>https://home-haven-5998b.web.app</p>
                </div>
            </div>
                <div className="w-full h-96 sm:h-full">
                    <MapContainer
                        center={[40.7128, -74.006]}
                        zoom={13}
                        style={{ height: '100vh', width: '100%' }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[40.7128, -74.006]}>
                            <Popup>
                                Home Haven <br /> Head Office
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            
        
        </div>
        
    );
};

export default About;