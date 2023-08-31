import axios from "axios"
import React, { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { AuthContext } from "../Components/auth/AuthProvider";

export default function NewPortfolioCard() {
    const [cookies] = useCookies(["userAuthToken"]);
    const authContext = useContext(AuthContext);
    const { logoutSuccess } = authContext;

    // create state to store form data
    const [formData, setFormData] = useState({})

    const handleFormChange = (e, fieldName) => {
        console.log(e.target.value)
        setFormData({ ...formData, [fieldName]: e.target.value })
    }

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Create API headers with the authorization token
        const apiHeaders = {
            headers: {
                Authorization: `Bearer ${cookies.userAuthToken}`,
            },
        };

        // TODO: FE data validation

        // make an API call to backend menu item create endpoint
        await axios.post('http://localhost:3000/api/portfolio/', formData, apiHeaders)
            .then(response => {
                console.log(response)
                navigate("/portfolio")
            })
            .catch(err => {
                console.log(err)
            })

        // handle the api response:
        //  - successful: console.log success
        //  - failure: console.log failure
    }

    return (
        <div>
            <section className="header max-w mx-auto p-4 flex justify-between items-center bg-sky-800 text-white">
                <h1 className="text-2xl font-medium">
                    <a href="/#home">Fractional Investment</a>
                </h1>
                <div className="hover:opacity-90 bg-teal-500 p-2 rounded-md text-white w-18" onClick={() => { logoutSuccess(); navigate("/")}}>Log Out</div>
            </section>
            <div className="container m-5 border border-solid flex flex-col">
                <div>
                    <h2 className="text-xl font-semibold py-3">Create New Investment</h2>
                </div>
                <div>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <div className="flex flex-row">
                            <div className="flex flex-col p-3 w-1/2 gap-3">
                                <div className="flex flex-row">
                                    <label htmlFor="name" className="form-label w-1/3">Name :</label>
                                    <input type="text" className="form-control border border-solid border-gray-700" id="name" name="name" onChange={(e) => { handleFormChange(e, 'name') }} />
                                </div>
                                <div className="flex flex-row">
                                    <label htmlFor="description" className="form-label w-1/3">Description :</label>
                                    <textarea className="form-control border border-solid border-gray-500" onChange={(e) => { handleFormChange(e, 'description') }} />
                                </div>
                                <div className="mb-3 flex flex-row">
                                    <label htmlFor="image" className="form-label w-1/3">Image :</label>
                                    <input type="String" className="form-control border border-solid border-gray-700" id="image" name="image" onChange={(e) => { handleFormChange(e, 'image') }} />
                                </div>
                                <div className="mb-3 flex flex-row">
                                    <label htmlFor="loanQuantum" className="form-label w-1/3">Loan Quantum :</label>
                                    <input type="number" className="form-control border border-solid border-gray-700" id="loanQuantum" name="loanQuantum" onChange={(e) => { handleFormChange(e, 'loanQuantum') }} />
                                </div>
                                <div className="mb-3 flex flex-row">
                                    <label htmlFor="grossReturn" className="form-label w-1/3">Gross Return :</label>
                                    <input type="number" className="form-control border border-solid border-gray-700" id="grossReturn" name="grossReturn" onChange={(e) => { handleFormChange(e, 'grossReturn') }} />
                                </div>
                                <div className="mb-3 flex flex-row">
                                    <label htmlFor="minAmount" className="form-label w-1/3">Min. Investment :</label>
                                    <input type="number" className="form-control border border-solid border-gray-700" id="minAmount" name="minAmount" onChange={(e) => { handleFormChange(e, 'minAmount') }} />
                                </div>
                                <div className="mb-3 flex flex-row">
                                    <label htmlFor="currency" className="form-label w-1/3">Currency :</label>
                                    <input type="text" className="form-control border border-solid border-gray-700" id="currency" name="currency" onChange={(e) => { handleFormChange(e, 'currency') }} />
                                </div>
                                <div className="mb-3 flex flex-row">
                                    <label htmlFor="typeOfFinance" className="form-label w-1/3">Type of Finance :</label>
                                    <input type="text" className="form-control border border-solid border-gray-700" id="typeOfFinance" name="typeOfFinance" onChange={(e) => { handleFormChange(e, 'typeOfFinance') }} />
                                </div>
                            </div>
                            <div>
                                <div className="mb-3 flex flex-row">
                                    <label htmlFor="purpose" className="form-label w-1/3">Purpose :</label>
                                    <input type="text" className="form-control border border-solid border-gray-700" id="purpose" name="purpose" onChange={(e) => { handleFormChange(e, 'purpose') }} />
                                </div>
                                <div className="mb-3 flex flex-row">
                                    <label htmlFor="issuer" className="form-label w-1/3">Issuer :</label>
                                    <input type="text" className="form-control border border-solid border-gray-700" id="issuer" name="issuer" onChange={(e) => { handleFormChange(e, 'issuer') }} />
                                </div>
                                <div className="mb-3 flex flex-row">
                                    <label htmlFor="issuerLocation" className="form-label w-1/3">Issuer Location :</label>
                                    <input type="text" className="form-control border border-solid border-gray-700" id="issuerLocation" name="issuerLocation" onChange={(e) => { handleFormChange(e, 'issuerLocation') }} />
                                </div>
                                <div className="mb-3 flex flex-row">
                                    <label htmlFor="closeDate" className="form-label w-1/3">Close Date :</label>
                                    <input type="date" className="form-control border border-solid border-gray-700" id="closeDate" name="closeDate" onChange={(e) => { handleFormChange(e, 'closeDate') }} />
                                </div>
                                <div className="mb-3 flex flex-row">
                                    <label htmlFor="tenure" className="form-label w-1/3">Tenure :</label>
                                    <input type="number" className="form-control border border-solid border-gray-700" id="tenure" name="tenure" onChange={(e) => { handleFormChange(e, 'tenure') }} />
                                </div>
                                <div className="mb-3 flex flex-row">
                                    <label htmlFor="assetClass" className="form-label w-1/3">Asset Class :</label>
                                    <input type="text" className="form-control border border-solid border-gray-700" id="assetClass" name="assetClass" onChange={(e) => { handleFormChange(e, 'assetClass') }} />
                                </div>
                                <div className="flex flex-row">
                                    <label htmlFor="highlights" className="form-label w-1/3">Highlights :</label>
                                    <textarea className="form-control border border-solid border-gray-500" onChange={(e) => { handleFormChange(e, 'highlights') }} />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="bg-teal-600 text-white p-2 btn btn-primary">Submit</button>
                    </form>
                </div>


            </div>
        </div>

    )
}