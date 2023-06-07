
const Cover = ({title}) => {
    return (
       
        <div className="hero h-[500px]  bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6">Enjoy!!your products.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
        
    );
};

export default Cover;
