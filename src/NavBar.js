import React from 'react'
import styled from "styled-components";


const NavBar = () => {
    return (
        <Wrapper className='container-nav'>
        <h2>Welcome to Quiz App</h2>   
        </Wrapper>
    )
}

export default NavBar;

const Wrapper = styled.section`
display:grid;
place-items:center;
background:#ff9900;
position: fixed;
width:100% ;
padding:.4rem;
h2{
    color:#e0e0eb
}

`