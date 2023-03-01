// implement the search component for btc explorer
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const SearchInput = styled.input`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
`;

const SearchButton = styled.button`
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    outline: none;
`;

// search for btc block, tx, or address

export const Search = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <SearchContainer>
            <SearchInput
                type="text"
                placeholder="Search for block, tx, or address"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            <SearchButton
                onClick={async () => {
                    const hashType = await checkHash(searchText);
                    if (hashType === 'block') {
                        window.location.href = `/block/${searchText}`;
                    } else if (hashType === 'tx') {
                        window.location.href = `/tx/${searchText}`;
                    } else if (hashType === 'address') {
                        window.location.href = `/address/${searchText}`;
                    }
                }}
            >
                Search
            </SearchButton>
        </SearchContainer>
    );
};

const checkHash = async (searchText: string) => {
    if (!searchText) throw new Error('Search text is required')
    const response = await fetch(`https://blockstream.info/api/block/${searchText}`)
    if (response.ok) return 'block'
    const txResponse = await fetch(`https://blockstream.info/api/tx/${searchText}`)
    if (txResponse.ok) return 'tx'
    const addressRes = await fetch(`https://blockstream.info/api/address/${searchText}`)
    if (addressRes.ok) return 'address'
}
