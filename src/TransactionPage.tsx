// implement the TransactionPage component of BTCExplorer
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { Transaction } from './types'

export const TransactionPage = () => {
    const { txHash } = useParams()
    const { data, isLoading, isError } = useQuery<Transaction, Error>(
        ['transaction', txHash],
        () => getTransaction(txHash as string),
        { enabled: !!txHash }
    )

    const { data: currentBlockHeight, isLoading: isLoadingBlockHeight, isError: isErrorBlockHeight } = useQuery<number, Error>(
        ['currentBlockHeight'],
        () => getCurrentBlockHeight(),
        { enabled: !!txHash }
    )

    const { data: exchangeRates, isLoading: isLoadingExchangeRates, isError: isErrorExchangeRates } = useQuery<any, Error>(
        ['exchangeRates'],
        () => getExchangeRate(),
        { enabled: !!txHash }
    )

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error!</div>

    return (
        <div>
            <h1>Transaction</h1>
            {/* transaction hash */}
            { data &&
            <>
            <h2>{ data?.txid }</h2>
            {/* received time date */}
            <p>Received time: { new Date(data?.status.block_time * 1000).toLocaleString() }</p>
            {/* status */}
            <p>Status: { data?.status.confirmed ? 'Confirmed' : 'Unconfirmed' }</p>
            {/* size in B */}
            <p>Size: { data?.size } B</p>
            {/* Number of confirmations: subtrack block height from current block height */}
            <p>Number of confirmations: { currentBlockHeight && currentBlockHeight - data?.status.block_height + 1 }</p>
            {/* Total BTC input */}
            <p>Total BTC input: { data?.vin.reduce((acc, cur) => acc + cur.prevout.value, 0) / 100000000 }</p>\
            {/* Total BTC input using Value component */}
            <p>Total BTC inpu2:</p>
            <Value value={data?.vin.reduce((acc, cur) => acc + cur.prevout.value, 0)} exchangeRate={exchangeRates?.bitcoin} />
            <p>Total BTC output: { data?.vout.reduce((acc, cur) => acc + cur.value, 0) / 100000000 }</p>
            {/* Total fees */}
            <p>Total fees: { data?.fee }</p>
            </>
            }
            <pre>{JSON.stringify(data, null, 2)}</pre>
            {/* exchange rates  */}
            <pre>{JSON.stringify(exchangeRates, null, 2)}</pre>
        </div>
    )
}

const getTransaction = async (txHash: string) => {
    if (!txHash) throw new Error('Transaction hash is required')
    const response = await fetch(`https://blockstream.info/api/tx/${txHash}`)
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
}

// get the current block height

const getCurrentBlockHeight = async () => {
    const response = await fetch(`https://blockstream.info/api/blocks/tip/height`)
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
}

// convert btc to usd and eur

const getExchangeRate = async () => {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Ceur`)
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
}

// value component for btc that allows to change the using exchange rate


const Value = ({ value, exchangeRate }: { value: number, exchangeRate: ExchangeRate }) => {
        // display bitcooin value
        const [display, setDisplay] = useState<'btc' | 'usd' | 'eur'>('btc')

        const btcValue = value && value / 100000000 || 0;
        // convert btc to usd and eur
        // display only 2 decimal places
        const usd = exchangeRate && (btcValue * exchangeRate.usd).toFixed(2)
        const eur = exchangeRate && (btcValue * exchangeRate.eur).toFixed(2)

        return (
            <div>
                <span>{ btcValue } BTC</span>
                <span> | </span>
                <span>{ usd } USD</span>
                <span> | </span>
                <span>{ eur } EUR</span>
            </div>
        )
    }
