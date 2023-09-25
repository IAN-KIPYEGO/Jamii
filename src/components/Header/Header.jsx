import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div className="mb-20">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Header;