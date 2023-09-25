const Banner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: 'url(https://i.ibb.co/7N80HjQ/background.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-90"></div>
                <div className="text-center py-48">
                    <div className="container mx-auto">
                        <div>
                            <h1 className="mb-5 text-4xl md:text-5xl lg:text-6xl px-5 font-bold text-black">I Grow By Helping People In Need</h1>
                        </div>

                        <div className="form-control mt-10">
                            <label className="input-group flex justify-center">
                                <input type="text" placeholder="Search Here..." className="input w-1/2" />
                                <span className="bg-red-500 text-white">Search</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;