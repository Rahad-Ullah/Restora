// import banner_img from "../../assets/banner.png"

const Banner = () => {
    return (
        <div className={`bg-[url('assets/banner.png')] h-screen bg-cover rounded-3xl flex flex-col items-center justify-center text-center space-y-6 text-white md:w-11/12 max-w-screen-2xl mx-auto`}>
            <h1 className="text-5xl font-bold max-w-screen-md">Discover an exceptional cooking class tailored for you!</h1>
            <p className="max-w-screen-md">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex gap-6 pt-3">
                <button className="btn btn-primary rounded-full text-base">Explore Now</button>
                <button className="btn btn-outline rounded-full text-base text-white hover:btn-primary">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;