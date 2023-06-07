import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import ShopCard from "../../Components/ShopCard/ShopCard";
import ShopCardTabs from "../../Components/ShopCardTabs/ShopCardTabs";
const HotDeals = () => {
    
    const [tabIndex, settabIndex] = useState(0);

    const [menu] = useMenu();
    const men = menu.filter((item) => item.category === "men");
    const women = menu.filter((item) => item.category === "women");
    const kids = menu.filter((item) => item.category === "kids");
    return (
        <div className="text-center">
            <Cover title={"Hot Deals"}></Cover>
            <Tabs
                defaultIndex={tabIndex}
                onSelect={(index) => settabIndex(index)}
            >
                <TabList className="mt-5">
                    <Tab>Men</Tab>
                    <Tab>Women</Tab>
                    <Tab>Kids</Tab>
                </TabList>
                <TabPanel>
                   <ShopCardTabs items={men}></ShopCardTabs>
                </TabPanel>
                <TabPanel>
                <ShopCardTabs items={women}></ShopCardTabs>
                </TabPanel>
                <TabPanel>
                <ShopCardTabs items={kids}></ShopCardTabs>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default HotDeals;
