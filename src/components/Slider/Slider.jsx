import home1 from '../../assets/home-1.jpeg'
import home2 from '../../assets/home-2.png'
import home3 from '../../assets/home-3.jpg'
import home4 from '../../assets/home-4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation, Autoplay, Pagination]}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            >
            <SwiperSlide className='rounded-2xl'>
                <div className="text-center w-full bg-cover bg-center md:h-screen md:min-h-screen h-96 rounded-2xl" // Set the width and height as per your requirement
                    style={{ backgroundImage: `url(${home1})` }}>
                    <h1 className='pt-32 lg:pt-40 text-3xl lg:text-7xl text-green-800 font-bold'>Home Haven</h1>
                    <h5 className='text-white'>Where dreams find their address</h5>
                    <h5 className='text-white'>Providing reliable home since 1992</h5>
                    <button className='btn rounded-full bg-green-700 text-white text-2xl font-bold mt-6'>Book Now</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-2xl'>
                <div className="text-center md:h-screen md:min-h-screen h-96 w-full bg-cover bg-center rounded-2xl" // Set the width and height as per your requirement
                    style={{ backgroundImage: `url(${home2})` }}>
                    <h1 className='pt-32 lg:pt-40 text-3xl lg:text-7xl text-green-800 font-bold'>Home Haven</h1>
                    <h5 className='text-white'>Where dreams find their address</h5>
                    <h5 className='text-white'>Providing reliable home since 1992</h5>
                    <button className='btn rounded-full bg-green-700 text-white text-2xl font-bold mt-6'>Book Now</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-2xl'>
                <div className="text-center md:h-screen md:min-h-screen h-96 w-full bg-cover bg-center rounded-2xl" // Set the width and height as per your requirement
                    style={{ backgroundImage: `url(${home3})` }}>
                    <h1 className='pt-32 lg:pt-40 text-3xl lg:text-7xl text-green-800 font-bold'>Home Haven</h1>
                    <h5 className='text-white'>Where dreams find their address</h5>
                    <h5 className='text-white'>Providing reliable home since 1992</h5>
                    <button className='btn rounded-full bg-green-700 text-white text-2xl font-bold mt-6'>Book Now</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='rounded-2xl'>
                <div className="text-center md:h-screen md:min-h-screen h-96 w-full bg-cover bg-center rounded-2xl" // Set the width and height as per your requirement
                    style={{ backgroundImage: `url(${home4})` }}>
                    <h1 className='pt-32 lg:pt-40 text-3xl lg:text-7xl text-green-800 font-bold'>Home Haven</h1>
                    <h5 className='text-white'>Where dreams find their address</h5>
                    <h5 className='text-white'>Providing reliable home since 1992</h5>
                    <button className='btn rounded-full bg-green-700 text-white text-2xl font-bold mt-6'>Book Now</button>
                </div>
            </SwiperSlide>
            
        </Swiper>
    );
};

export default Slider;