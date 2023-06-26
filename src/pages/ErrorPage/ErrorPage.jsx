import Lottie from "lottie-react";
import animationData from "../../assets/404.json";

const ErrorPage = () => {
    return (
        <>
            <Lottie className="h-[90vh]" animationData={animationData} loop={true} />
        </>
    );
};

export default ErrorPage;