const Banner = () => {
    return (
      <div>
        <div className="w-10/12  mx-auto mt-8">
          <div className="carousel w-full rounded-lg h-96">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/tBBxHjn/slider7.jpg "
                className="w-full bg-cover	bg-center	"
              />
              <div className="absolute h-full flex justify-start gap-4 left-0 top-0 pl-8 pt-4 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className=" lg:w-1/3 w-2/3 space-y-4  mt-9">
                  <h2 className="lg:text-4xl text-xl text-white space-y-4 lg:leading-snug font-bold	">
                  MODERN & SPACIOUS ROOMS
                  </h2>
                  <p className="text-white capitalize">
                  enjoy your holiday at the hotel himara
                  </p>
                  <div className="grid grid-cols-2 lg:flex">
                    <button className="btn rounded-none  bg-[#FF3811] text-white border-orange-600 hover:bg-[#FF3811] ">
                      Discover More
                    </button>
                    <button className="btn rounded-none bg-transparent text-white ml-4 border-2 border-[#FF3811]">
                      Latest Project
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-end gap-4   transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a
                  href="#slide3"
                  className="btn btn-circle bg-[#FF3811] text-white border-none"
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn btn-circle bg-[#FF3811] text-white border-none"
                >
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/mHx5PTx/slider10.jpg "
                className="w-full bg-cover	bg-center	"
              />
              <div className="absolute h-full flex justify-start gap-4    left-0 top-0 pl-8 pt-4 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className=" lg:w-1/3 w-2/3 space-y-4 mt-9">
                  <h2 className="lg:text-4xl text-xl text-white space-y-4 lg:leading-snug font-bold uppercase	">
                  a luxury experience
                  </h2>
                  <p className="text-white capitalize">
                  live your myth in himara
                  </p>
                  <div className="grid grid-cols-2 lg:flex">
                    <button className="btn rounded-none  bg-[#FF3811] text-white border-orange-600 hover:bg-[#FF3811] ">
                      Discover More
                    </button>
                    <button className="btn rounded-none bg-transparent text-white ml-4 border-2 border-[#FF3811]">
                      Latest Project
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-end gap-4   transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a
                  href="#slide1"
                  className="btn btn-circle bg-[#FF3811] text-white border-none"
                >
                  ❮
                </a>
                <a
                  href="#slide3"
                  className="btn btn-circle bg-[#FF3811] text-white border-none"
                >
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/YQdGzrp/slider11.jpg "
                className="w-full bg-cover	bg-center	"
              />
              <div className="absolute h-full flex justify-start gap-4    left-0 top-0 pl-8 pt-4 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                <div className=" lg:w-1/3 w-2/3 space-y-4 mt-9">
                  <h2 className="lg:text-4xl text-xl text-white space-y-4 lg:leading-snug font-bold	uppercase">
                  in the perfect location
                  </h2>
                  <p className="text-white capitalize">
                  family room from $100 per night
                  </p>
                  <div className="grid grid-cols-2 lg:flex">
                    <button className="btn rounded-none  bg-[#FF3811] text-white border-orange-600 hover:bg-[#FF3811] ">
                      Discover More
                    </button>
                    <button className="btn rounded-none bg-transparent text-white ml-4 border-2 border-[#FF3811]">
                      Latest Project
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-end gap-4   transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a
                  href="#slide2"
                  className="btn btn-circle bg-[#FF3811] text-white border-none"
                >
                  ❮
                </a>
                <a
                  href="#slide1"
                  className="btn btn-circle bg-[#FF3811] text-white border-none"
                >
                  ❯
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  