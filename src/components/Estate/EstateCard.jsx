import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const EstateCard = ({ est }) => {

    useEffect(() => {
        AOS.init();
      }, []);

    const { estate_title, segment_name, photo, price, area, id } = est;
    return (
        <div data-aos="fade-up">
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={photo} alt="property" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{estate_title}</h2>
                    <p><span className="font-bold">Type:</span> {segment_name}</p>
                    <div className="flex justify-between">
                        <div>
                            <p>{price}</p>
                            <p>{area}</p>
                        </div>
                        <div>
                            <Link to={`/estate/${id}`}><button className="btn btn-primary">View Property</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;