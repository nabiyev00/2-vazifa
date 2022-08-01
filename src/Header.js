import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <h2>
                                <a href="https://www.wix.com/demone2/k-griffith">K. Griffith</a>
                            </h2>
                        </div>
                        <div className="nav">
                            <ul className="nav-item">
                                <li className="nav-link">
                                    <a href="/#appearances">APPEARANCES</a>
                                </li>
                                <li className="nav-link">
                                    <Link to="/books">BOOKS</Link>
                                </li>
                                <li className="nav-link">
                                    <Link to="/news">NEWS</Link>
                                </li>
                                <li className="nav-link">
                                    <Link to="/about">ABOUT</Link>
                                </li>
                                <li className="nav-link">
                                    <Link to="/contact">CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    );
}
