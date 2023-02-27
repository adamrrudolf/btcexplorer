// write header for BTC explorer
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Header = () => {
    return (
        <NavBar>
            <HomePageLink to="/">BTC Explorer</HomePageLink>
            <Link to="/block">Block</Link>
            <Link to="/tx">Transaction</Link>
            <Link to="/address">Address</Link>
        </NavBar>
    );
};

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: #f5f5f5;
    gap: 2rem;
`;

const HomePageLink = styled(Link)`
    font-size: 1.5rem;
    /* move text 2px up */
    transform: translateY(-2px);
`;
