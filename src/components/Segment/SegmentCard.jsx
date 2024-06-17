import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SegmentCard = ({ estate }) => {
  useEffect(() => {
    AOS.init();
  }, []);

const { segment_name, segment_image, segment_icon } = estate;

  return (
    <div data-aos="fade-out" className="bg-slate-200 rounded-xl p-2">
      <div className="flex justify-between">
      <h4>Segment</h4>
      <button>See all</button>
      </div>
      <div className="flex justify-center items-center">
        <img className="w-20 lg:w-36 h-20 lg:h-36" src={segment_icon} alt="segment_icon" />
      </div>
      <div className="flex justify-center items-center">
      <h3>{segment_name}</h3>
      </div>
    </div>
  );
};

export default SegmentCard;