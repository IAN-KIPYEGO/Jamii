import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/LocatStorage";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {

    const donations = useLoaderData();

    const [donateMoney, setDonateMoney] = useState([]);

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
                    donateMoney.map(donate => <DonationCard key={donate.id} donate={donate}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Donation;