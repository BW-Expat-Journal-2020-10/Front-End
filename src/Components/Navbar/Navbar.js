import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Navbar = () => {


   return (
     <NavWrapper>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/newpost">newpost</Link>
        <Link to="/homepage">Home</Link>

    </NavWrapper>
   );
};

const NavWrapper = styled.div`
 height: auto;

`;
export default Navbar;