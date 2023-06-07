const ShopCard = ({items}) => {
    const { image, price, name, rating } = items;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <p>Rating:{rating}</p>
                <div className="card-actions hover:bg-pink-500 hover:p-2 hover:rounded-lg">
                    <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500 text-white ">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;
