import About from "../HomeComponent/About";
import Banner from "../HomeComponent/Banner";
import { Carousel2 } from "../HomeComponent/CarouselMain";
import DescountBanner from "../HomeComponent/DescountBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <DescountBanner />
      <div className="mb-4 m-4">
        <h1 className="text-center text-[#FF3811] text-4xl font-bold uppercase my-4">Featured Room</h1>
        <Carousel2 />
      </div>
    </div>
  );
};

export default Home;
