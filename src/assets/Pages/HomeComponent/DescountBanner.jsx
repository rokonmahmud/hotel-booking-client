const DescountBanner = () => {
  return (
    <div className="">
      <h1 className="text-[#FF3811] text-4xl uppercase text-center font-bold">Spacial Offer</h1>
      <div id="slide1" className="carousel-item relative w-9/12 my-8 mx-auto">
        <img
          src="https://www.gannett-cdn.com/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg "
          className="w-full bg-cover lg:h-[400px] h-[250px] bg-center	"
        />
        <div className="absolute h-full flex justify-start gap-4 left-0 top-0 pl-8 pt-4 right-5 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
          <div className=" lg:w-1/3 w-2/3   space-y-4  lg:mt-9">
            <h2 className="lg:text-4xl text-2xl text-white space-y-4 lg:leading-snug font-bold	">
              Deluxe Room
            </h2>
            <p className="text-white capitalize lg:text-2xl text-xl">
              enjoy Our Services, 
              holiday at the hotel himara
            </p>
            <p className="text-white uppercase text-2xl   lg:text-4xl border-2 lg:border-4 border-[#FF3811] text-center lg:p-4 p-2 rounded-lg">
              <span className="text-[#FF3811]">40% </span>off <br /> <span className="lg:text-2xl text-lg">black friday sale</span>
            </p>
           
          </div>
        </div>
        <div className="absolute flex justify-end gap-4   transform -translate-y-1/2 left-5 right-5 bottom-0"></div>
      </div>
    </div>
  );
};

export default DescountBanner;
