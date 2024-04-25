// Code to display the Privacy Policy page
import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import Sliders from '../components/Slider';
import Videos from '../components/videos';
import Thoughts from '../components/Thoughts';

function PrivacyPolicy() {
//   useEffect(() => {
//     document.title = 'Flashback';
//   }, []);

  return (
    <div className="screen-home">
      <Hero />
      <FeaturedCollection />
      <Sliders />
      <Videos />
     <Thoughts/>
     
    </div>
  );
}
export default PrivacyPolicy;
