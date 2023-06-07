import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "./MenuItems";
import useMenu from "../../../hooks/useMenu";


const PolularItems = () => {
    // const [menu,setMenu] = useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => setMenu(data))
    // },[])

    const [menu] = useMenu();
    return (
        <div>
           <SectionTitle heading={"Popular"}
            subHeading={"OrderNow"}></SectionTitle>
            <div className="flex mt-10 md:grid grid-cols-3">
                {
                    menu?.map(item => <MenuItems key={item._id} item={item}></MenuItems> )
                }
            </div>
        </div>
    );
};

export default PolularItems;