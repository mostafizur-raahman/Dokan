import ShopCard from "../ShopCard/ShopCard";

const ShopCardTabs = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-5">
            {items?.map((item) => (
                <ShopCard items={item} key={item._id}></ShopCard>
            ))}
        </div>
    );
};

export default ShopCardTabs;
