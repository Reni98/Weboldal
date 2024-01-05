import React from "react";
import Button from './Button'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer(){
    return(
        <div className="footer-container">
            <section className="footer-subscriptipn">
            <p className="footer-subscriptipn-heading">
                Csatlakozz hozzánk, légy részese a programokna, ne maradj le az újdonságokról!
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="E-mail"></input>
                    <Button buttonStyle="btn--outline">Küldés</Button>
                </form>
            </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Rólunk</h2>
                        <Link to="/sign-up">Regisztráció</Link>
                        <Link to="/">Vissza a főoldalra</Link>
                        <Link to="/">Karrier</Link>
                        <Link to="/">Webshop</Link>
                        <Link to="/">Szolgáltatások</Link>
                        <Link to="/">Termékek</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Rólunk</h2>
                        <Link to="/sign-up">Regisztráció</Link>
                        <Link to="/">Vissza a főoldalra</Link>
                        <Link to="/">Karrier</Link>
                        <Link to="/">Webshop</Link>
                        <Link to="/">Szolgáltatások</Link>
                        <Link to="/">Termékek</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Rólunk</h2>
                        <Link to="/sign-up">Regisztráció</Link>
                        <Link to="/">Vissza a főoldalra</Link>
                        <Link to="/">Karrier</Link>
                        <Link to="/">Webshop</Link>
                        <Link to="/">Szolgáltatások</Link>
                        <Link to="/">Termékek</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Rólunk</h2>
                        <Link to="/sign-up">Regisztráció</Link>
                        <Link to="/">Vissza a főoldalra</Link>
                        <Link to="/">Karrier</Link>
                        <Link to="/">Webshop</Link>
                        <Link to="/">Szolgáltatások</Link>
                        <Link to="/">Termékek</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-medi-wrap">
                    TheVr <i class="fa-solid fa-dice-d20"></i>
                </div>
                <small className="website-rights">TheVr 2024</small>
                <div className="social-icons">
                    <Link className="social-icon-link facebook"
                    to=""
                    target="-blank"
                    ariel-label="Facebook"
                    >
                        <i class="fa-brands fa-square-facebook"></i>
                    </Link>
                    <Link className="social-icon-link instagram"
                    to=""
                    target="-blank"
                    ariel-label="Insagram"
                    >
                        <i class="fa-brands fa-square-instagram"></i>
                    </Link>
                    <Link className="social-icon-link twitter"
                    to=""
                    target="-blank"
                    ariel-label="Twitter"
                    >
                      <i class="fa-brands fa-square-twitter"></i>
                    </Link>
                    <Link className="social-icon-link linkedin"
                    to=""
                    target="-blank"
                    ariel-label="Linkedin"
                    >
                     <i class="fa-brands fa-linkedin"></i>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Footer