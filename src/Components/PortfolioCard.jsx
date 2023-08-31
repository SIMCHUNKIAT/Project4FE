import React from "react";
import { Link } from "react-router-dom";

function PortfolioCard({ title, imageSrc, description, link }) {
    
    return (
        <div className="border border-black m-3 rounded-lg shadow-xl" style={{ width: '15rem' }}>
            <Link to='/portfolio/:itemID'>
                <img src={imageSrc} alt="..." />
            </Link>
            <div className="p-3">
                <h5>{title}</h5>
                <p>{description}</p>
                <a href={link}>Go somewhere</a>
            </div>
        </div>
    );
}

export default PortfolioCard