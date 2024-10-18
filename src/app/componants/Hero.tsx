// pages/index.tsx
import Slider from '../componants/Slider';
import '../../assets/slider.scss';

const images = [
  {
    source: "https://images.pexels.com/photos/6447203/pexels-photo-6447203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Little Venice in Colmar"
  },
  {
    source: "https://images.pexels.com/photos/3283186/pexels-photo-3283186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Back View of a Man Standing on a Rock near the Waterfalls"
  },
  // ... (add the rest of your images)
];

const Hero: React.FC = () => {
  return (
    <Slider title="React Slider" slides={images} />
  );
};

export default Hero;
