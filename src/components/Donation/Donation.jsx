import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/LocatStorage";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {

    const donations = useLoaderData();

    const [donateMoney, setDonateMoney] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (donations.length > 0) {
            const moneyDonation = donations.filter(donation => storedDonationIds.includes(donation.id));
            setDonateMoney(moneyDonation);
        }
    }, [donations]);

    return (
        <div className="container mx-auto px-5 my-10">
            <div className="grid grid-col-1 lg:grid-cols-2 gap-5">
                {
                    donateMoney.slice(0, dataLength).map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
                }
            </div>
            <div className={dataLength === donateMoney.length && 'hidden'}>
                <div onClick={() => setDataLength(donateMoney.length)} className="flex justify-center mt-10">
                    <button className="btn bg-green-700 text-white font-bold">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Donation;