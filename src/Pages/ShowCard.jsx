import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Components/auth/AuthProvider";

function ShowCard() {

    const [menuItem, setMenuItem] = useState(null)
    const navigate = useNavigate();
    const { getUserFromToken, getToken, logoutSuccess } = useContext(AuthContext);

    // get the item ID
    const { itemID } = useParams()

    // use item ID to call backend API localhost:3000/api/portfolio/:itemID
    useEffect(() => {
        const showPortfolioCard = async () => {
            try {
                const userToken = getUserFromToken();
                const decodedUser = getUserFromToken(userToken);

                const response = await axios.get(`http://localhost:3000/api/portfolio/${itemID}`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                });
                setMenuItem(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        showPortfolioCard();
    }, [itemID, getUserFromToken]);

    const onInvest = async () => {
        try {
            const userToken = getToken()
            const decodedUser = getUserFromToken(userToken);

            const response = await axios.post(`http://localhost:3000/api/user/${decodedUser.sub}/add-portfolio`, {
                itemID: itemID
            },
            {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            });
            console.log(response.data)
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <section className="max-w-6xl mx-auto p-4 flex justify-between items-center bg-sky-800 text-white">
                <h1 className="text-2xl font-medium">
                    <a href="/#home">Fractional Investment</a>
                </h1>
                <div className="hover:opacity-90 bg-teal-500 p-2 rounded-md text-white w-18" onClick={() => { logoutSuccess(); navigate("/")}}>Log Out</div>
            </section>
            <div className="flex flex-col mt-8">
                <section className="flex flex-row border border-solid mx-24">
                    <div className="w-1/2 p-5 m-3 flex flex-col">
                        <p>Investment Title</p>
                        {menuItem ? (
                            <>
                                <img src={menuItem.image} alt={menuItem.name} className="w-1/2 h-28" />
                            </>
                        ) : ''}
                    </div>
                    <div className="grid grid-cols-2 gap-5 p-3">
                        {menuItem ? (
                            <>
                                <div><p>Loan Quantum: <br></br>{menuItem.currency}{menuItem.loanQuantum}</p></div>
                                <div><p>Gross Returns (p.a.)<br></br>{menuItem.grossReturn}%</p></div>
                                <div><p>Minimum Investment:<br></br>{menuItem.currency}{menuItem.minAmount}</p></div>
                            </>
                        ) : ''}
                    </div>
                </section>
                <section className="justify-center mx-32 my-5">
                    <h1 className="text-2xl font-semibold my-2">Investment Details</h1>
                    <p>Description of the investment.Description of the investment.Description of the investment.Description of the investment.Description of the investment.Description of the investment.Description of the investment.Description of the investment.Description of the investment.Description of the investment.</p>
                    <br></br>
                    <img src="" alt="" />
                    <br></br>
                    <h2 className="text-xl my-2">About the Issuer and Loan Purpose</h2>
                    <p>Description of the issuer and loan purpose.Description of the issuer and loan purpose.Description of the issuer and loan purpose.Description of the issuer and loan purpose.Description of the issuer and loan purpose.</p>
                    <br></br>
                    <h2 className="text-xl my-2">Investment Highlights</h2>
                    <p>Investment highlights.Investment highlights.Investment highlights.Investment highlights.Investment highlights.Investment highlights.Investment highlights.Investment highlights.Investment highlights.Investment highlights.Investment highlights.Investment highlights.Investment highlights.</p>
                    <br></br>
                    <div className="flex flex-row">
                        <div className="bg-teal-700 text-white justify-center w-32 align-middle text-center p-2 rounded-md m-3" onClick={onInvest}>
                            Invest
                        </div>
                        <div className="bg-teal-700 text-white justify-center w-32 align-middle text-center p-2 rounded-md m-3">
                            <Link to={`/portfolio/${itemID}/edit`}>Edit</Link>
                        </div>
                        <div className="bg-teal-700 text-white justify-center w-32 align-middle text-center p-2 rounded-md m-3">
                            <Link to="/dashboard">Back</Link>
                        </div>
                        <div className="bg-teal-700 text-white justify-center w-32 align-middle text-center p-2 rounded-md m-3">
                            <Link to="/portfolio">Back</Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default ShowCard;