const MenuItems = ({ item }) => {
    const { image, price, name, rating } = item;
    return (
        <div className="mt-4 mb-4">
            <img src={image} className="w-[300px] h-[400px]" alt="" />
            <div className="ml-[80px]">
                <p className="text-xl font-bold">{name}</p>
                <p>${price}</p>
                <p>Ratings :{rating}</p>
                <button className="btn bg-gradient-to-r from-purple-500 to-pink-500 textw">Add to Cart </button>
            </div>
        </div>
    );
};

export default MenuItems;
