import React,{Fragment} from 'react';
import styled from "styled-components";
import {Zoom} from "@stahl.luke/react-reveal";
import logo from "../assets/logo.png";



const Navbar = (props) => {
  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt=""/>
            Travel
          </div>
          <div className="toggle"/>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#recommend">Places</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        <button>connect</button>
      </Nav>

    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .brand{
    .container{
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      text-transform: uppercase;
      font-weight: 900;
    }
    .toggle{
      display: none;
    }
  }
  
  ul{
    display: flex;
    list-style-type: none;
    gap: 1rem;
    li{
      a{
        text-decoration: none;
        color:#0077b6;
        transition: 0ms.1s ease-in-out;
        &:hover{
          color: #023e8a;
        }
      }
      
      &:first-of-type{
        a{
          color: #023e8a;
          font-weight: 700;
        }
      }
    }
  }
  
  button{
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: #fff;
    background-color: #48cae4;
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    transition: 0.3s ease-in-out;
    &:hover{
      background-color: #023e8a;
    }
  }
  
`
export default  Navbar;

