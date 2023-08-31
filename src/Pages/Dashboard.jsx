import React, { useContext, useState, useEffect } from "react";
import PortfolioCard from "../Components/PortfolioCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Components/auth/AuthProvider";
import axios from "axios";

function Dashboard() {

    const navigate = useNavigate();
    const navigateToPortfolioItem = (itemID) => {
        navigate(`/portfolio/${itemID}`);
    };

    const authContext = useContext(AuthContext);
    const { logoutSuccess, getUserFromToken, getToken } = authContext;
    const user = getUserFromToken();
    const [portfolioItems, setPortfolioItems] = useState([]);
    const { itemID } = useParams()

    useEffect(() => {
        // Simulate fetching portfolio items from a database
        const fetchUserData = async () => {
            try {
                // Get the user's JWT from the authentication context
                const userToken = getToken();
                const decodedUser = getUserFromToken(userToken);

                const response = await axios.get(`http://localhost:3000/api/user/${decodedUser.sub}`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                }); // Replace with your API endpoint // need to pass in jwt
                setPortfolioItems(response.data.portfolio);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [itemID, getUserFromToken]);

    return (
        <div>
            <section className="mx-auto p-4 flex justify-between items-center bg-sky-800 text-white">
                <h1 className="text-2xl font-medium">
                    <a href="/#home">Fractional Investment</a>
                </h1>
                <button className="hover:opacity-90 bg-teal-500 p-2 rounded-md text-white w-18" onClick={() => { logoutSuccess(); navigate("/")}}>Log Out</button>
            </section>
            <div className="flex flex-col mx-14 my-5 gap-2">
                <section className="flex flex-row border border-solid border-black">
                    <div className="w-5/6">
                        <h2 className="text-lg font-bold p-2 align-top">Profile</h2>
                        <p className="p-2 mb-4">User: {user.firstName}</p>
                    </div>
                    <div>
                        <div className="bg-teal-600 px-3 py-1 mt-2 rounded-md text-white"><Link to="/portfolio">NEW Opportunities</Link></div>
                    </div>
                </section>
                <section className="border border-black">
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <h1 className="m-3 text-xl font-semibold">Portfolio</h1>
                            <div className="bg-teal-600 text-white px-3 mt-3 rounded-md font-semibold"><Link to="/portfolio/new">Create</Link></div>
                        </div>
                        <div className="grid grid-cols-4 gap-3">
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
                </section>
            </div>
        </div>

    );
}

export default Dashboard