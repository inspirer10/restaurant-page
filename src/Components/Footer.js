import React from 'react';
import { FaFacebook as Fb} from "react-icons/fa";
import { FaInstagram as Insta} from "react-icons/fa";
import { FaTwitter as Twiter} from "react-icons/fa";
import { FaYoutube as Yt } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import './Footer.css';

function Footer() {
    return (
        <footer id="footer">
            <div className="footer-content">
                <HashLink to="/#top" className="footer-link-fix">
                    <p className="footer-restaurant">Restaurant</p>
                </HashLink>
                <div className="socials">
                    <HashLink to="/" className="footer-link"><Fb className='footer-icon'></Fb></HashLink>
                    <HashLink to="/" className="footer-link"><Insta className='footer-icon'></Insta></HashLink>
                    <HashLink to="/" className="footer-link"><Twiter className='footer-icon'></Twiter></HashLink>
                    <HashLink to="/" className="footer-link"><Yt className='footer-icon'></Yt></HashLink>
                </div>
            </div>
        </footer>
    )
}

export default Footer;