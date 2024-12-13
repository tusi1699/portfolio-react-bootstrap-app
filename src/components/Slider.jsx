import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
export default function Slider()
{
    return(
        <>
        <Navbar/>
        <section id="porfolio-slider">
          <div className="p-5 ">
            <h1 className="fs-1 text-white text"><b>Hey! I am Trupti Pansuriya</b> </h1>
            <br/>   
            <h3 className="fs-1 text-white"><b>Frontend-Devloper</b></h3>

            <button type="button" className="btn btn-lg btn-outline-light mt-5 ">Hire Me</button>
            
            </div>  

        </section>
        </>
    )
}