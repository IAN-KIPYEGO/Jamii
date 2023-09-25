import { useLoaderData } from "react-router-dom";
import HomeCard from "../HomeCard/HomeCard";
import Banner from "../Banner/Banner";

const Home = () => {

    const cards = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 px-5 container mx-auto'>
                {
                    cards.map(card => <HomeCard key={card.id} card={card}></HomeCard>)
                }
            </div>
        </div>
    );
};

export default Home;