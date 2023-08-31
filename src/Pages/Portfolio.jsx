import React, { useContext, useState, useEffect } from "react";
import PortfolioCard from "../Components/PortfolioCard";
import { AuthContext } from "../Components/auth/AuthProvider";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Portfolio() {

    const navigate = useNavigate();
    const navigateToPortfolioItem = (itemID) => {
        navigate(`/portfolio/${itemID}`);
    };

    const authContext = useContext(AuthContext);
    const { logoutSuccess, getUserFromToken } = authContext;
    const user = getUserFromToken(); // Get user info from the authentication token

    const [portfolioItems, setPortfolioItems] = useState([]);

    useEffect(() => {
        // Make API request to fetch portfolio items
        const fetchPortfolioItems = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/portfolio/"); // Adjust the API endpoint
                setPortfolioItems(response.data);
            } catch (error) {
                console.error("Error fetching portfolio items:", error);
            }
        };

        fetchPortfolioItems();
    }, []); // Empty dependency array means this effect runs only once

    return (
        <div className="">
            <section className="max-w-8xl mx-auto p-4 flex justify-between items-center bg-sky-800 text-white">
                <h1 className="text-2xl font-medium">
                    <a href="/#home">Fractional Investment</a>
                </h1>
                <button className="hover:opacity-90 bg-teal-500 p-2 rounded-md text-white w-18" onClick={() => { logoutSuccess(); navigate("/")}}>Log Out</button>
            </section>
            <section className="">
                <div className="flex flex-row justify-center m-2">
                    <div className="flex flex-col border border-solid border-black">
                        <div>
                            <h1 className="m-3 text-xl font-semibold">Investment Opportunities</h1>
                        </div>
                        <div className="grid grid-cols-5 gap-1">
                            {portfolioItems.map((item) => (
                                <div key={item._id} onClick={() => navigateToPortfolioItem(item._id)}>
                                    <PortfolioCard
                                        title={item.name}
                                        imageSrc={item.image}
                                        description={item.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-teal-700 text-white justify-center w-32 align-middle text-center p-2 rounded-md m-3">
                <Link to="/dashboard">Back</Link>
            </div>
        </div>
    )
}

export default Portfolio