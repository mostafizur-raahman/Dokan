

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div>
            <p className="text-xl text-center text-orange-400">{subHeading}</p>
            <h3 className="text-4xl text-center font-bold underline">{heading}</h3>
        </div>
    );
};

export default SectionTitle;