import React from 'react'
import { Link } from 'react-router-dom'
import { nav } from '../common/nav';

const logo={
    blockSize: "45px"
};
const navitem={
    marginLeft: "20px",
    marginRight: "20px",
    color:"white"
};
export default function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/"><img src="/logo.png" alt="" style={logo} /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item mx-3" >
                           {nav.map((item,index)=>(
                             <Link to={item.pathname} key={index} style={navitem}>{item.name} </Link>
                           ))}
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
