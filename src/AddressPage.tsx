// implement the AddressPage component of BTCExplorer
import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Address } from './types'
// import { getAddress } from './api'

export const AddressPage = () => {
    const { address } = useParams()
    const { data, isLoading, isError } = useQuery<Address, Error>(
        ['address', address],
        () => getAddress(address as string),
        { enabled: !!address }
    )

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error!</div>

    return (
        <div>
            <h1>Address</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

const getAddress = async (address: string) => {
    if (!address) throw new Error('Address is required')
    const response = await fetch(`https://blockstream.info/api/address/${address}`)
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
}