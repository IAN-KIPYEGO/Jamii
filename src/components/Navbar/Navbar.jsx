import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <img src="https://i.ibb.co/MSfF3M1/Logo.png" alt="" />
                </div>

                <div className="flex-none">
                    <ul className="flex px-1 gap-10 text-xl">
                        <li>
                            <NavLink to='/' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/donation' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
                            }>Donation</NavLink>
                        </li>
                        <li>
                            <NavLink to='/statistics' className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 font-bold underline" : ""
                            }>Statistics</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;