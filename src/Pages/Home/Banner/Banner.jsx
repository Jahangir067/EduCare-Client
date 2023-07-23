import './Banner.css';

const Banner = () => {
    return (
        <div className="banner w-full bg-base-100 shadow-xl image-full">
        <figure><img src="https://i.ibb.co/dgY9T0S/hero-bg.jpg" alt="Shoes" /></figure>
        <div className="heading card-body items-center text-center text-white">
            <h2 className='text-3xl font-bold'>Explore Colleges & See Details </h2>
            <p className='text-xl'>There are many variations of college details</p>
        </div>
    </div>


    );
};

export default Banner;