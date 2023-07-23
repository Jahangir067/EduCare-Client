import Banner from "../Banner/Banner";
import FeatureCollege from "../FeatureCollege/FeatureCollege";
import Gallery from "../Gallery/Gallery";
import Research from "../Research/Research";

const Home = () => {
    return (
        <div>
            <Banner />
            <FeatureCollege />
            <Gallery></Gallery>
            <Research />
        </div>
    );
};

export default Home;