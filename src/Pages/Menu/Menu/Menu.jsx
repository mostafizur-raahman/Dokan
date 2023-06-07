
import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {

    const [menu] = useMenu();
    const men = menu.filter(item => item.category === 'men');
    const women = menu.filter(item => item.category === 'women');
    const kids = menu.filter(item => item.category === 'kids');

    return (
        <div>
            <Helmet>
                <title>DOKAN | Menu</title>
            </Helmet>
            <Cover title={"welcome to Mens collection"}></Cover>
            <SectionTitle heading={"Don't miss today Mens offer"} subHeading={"Order Now!"}></SectionTitle>
           <MenuCategory items={men}></MenuCategory>
           <Cover title={"welcome to womens collection"}></Cover>
            <SectionTitle heading={"Don't miss today womens offer"} subHeading={"Order Now!"}></SectionTitle>
            <MenuCategory items={women}></MenuCategory>

        </div>
    );
};

export default Menu;