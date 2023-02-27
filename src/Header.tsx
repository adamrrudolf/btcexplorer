// write header for BTC explorer
import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/block">Block</Link>
            <Link to="/tx">Transaction</Link>
            <Link to="/address">Address</Link>
        </header>
    );
};
