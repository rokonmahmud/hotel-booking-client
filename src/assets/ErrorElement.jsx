import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="bg-[#FCF9ED] flex justify-center flex-col items-center">
            <img className=" mx-auto" src="https://i.ibb.co/kqLM214/error-element.png" alt="" />
            <Link to={'/'}>
            {/* <button  className="text-xl mb-8 w-32 h-16 bg-[#FF3811] hover:scale-95 text-white duration-300">Go Back</button> */}
            </Link>
        </div>

    );
};

export default ErrorElement;