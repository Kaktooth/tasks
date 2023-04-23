import { Outlet, Link } from "react-router-dom";
import './layout.css';

const Layout = () => {
    return (
        <>
            <nav class="menu">
                <div class="logo">
                    GFinance
                </div>
                <div class="nav-el">
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About us</Link>
                    <Link to="/contact-us">Contact us</Link>
                </div>
            </nav>
            
            <Outlet />
            <footer id="footer">
                <div class="footer-logo">
                    Copyright 2022, GFinance.com
                </div>
            </footer>
        
        </>
    )
};

export default Layout;