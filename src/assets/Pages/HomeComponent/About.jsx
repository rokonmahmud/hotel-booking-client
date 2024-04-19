const About = () => {
  return (
    <div>
      <div className="w-10/12 mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className=" ">
              <img className="rounded-lg" src="https://i.ibb.co/zfbXNpG/h1-img-5.jpg" alt="this is room picture" />
            </div>
            <div className="lg:ml-20 ml-4 p-8 mt-20 lg:mt-4">
              <span className="text-[#FF3811] text-xl  font-bold">
                About Us
              </span>
              <h1 className="text-5xl mt-8 font-bold">
                Make your golden memories
              </h1>
              <p className="py-6 lg:w-[500px] ">
                A 5-star hotel located near the airport and railway station;
                steps away from tourist sites like cave, hotel is ideal for
                leisure and business alike. Decorated with contemporary art
                featuring rooms and suites offering a view of the city skyline
                and the vast oasis; our huge ballroom and meeting spaces are
                ideal for business, and weddings.
              </p>
              <button className="btn rounded-none  bg-[#FF3811] text-white border-orange-600 hover:bg-[#FF3811]">
                DISCOVER MORE{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
