import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FeatureItems from "../Feature/FeatureItems";
import PolularItems from "../PopularSales/PolularItems";


const Home = () => {
    return (
        <div>
          <Helmet>
            <title>DOKAN | Home</title>
          </Helmet>
          <Banner></Banner>
          <Category></Category>
          <PolularItems></PolularItems>
          <FeatureItems></FeatureItems>
        </div>
    );
};

export default Home;