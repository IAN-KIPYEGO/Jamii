import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from "../Utility/LocatStorage";


const CardDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === idInt);


    const handleDonate = () => {
        saveDonation(idInt);
        toast("Donate successfully");
    }


    return (
        <div className="container mx-auto px-5 my-10">
            <div className="hero h-[70vh] rounded-xl flex flex-col-reverse items-end" style={{ backgroundImage: `url(${card.image})` }}>
                <div className="hero-overlay bg-black bg-opacity-50 h-24 lg:h-36 rounded-b-xl">
                    <Link>
                        <button onClick={handleDonate} style={{ backgroundColor: '#FF444A' }} className="text-white p-3 rounded-lg m-5 px-7 lg:m-12 text-xl">Donate ${card.price}</button>
                    </Link>
                </div>
            </div>
            <h2 className="text-5xl font-bold mt-10 my-6">{card.title}</h2>
            <p>{card.description}</p>
            <ToastContainer position="top-center"></ToastContainer>
        </div>
    );
};

export default CardDetails;