// implement the TransactionPage component of BTCExplorer
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Transaction } from './types'
// import { getTransaction } from './api'
// import { Transaction } from './types'

export const TransactionPage = () => {
    const { txHash } = useParams()
    const { data, isLoading, isError } = useQuery<Transaction, Error>(
        ['transaction', txHash],
        () => getTransaction(txHash as string),
        { enabled: !!txHash }
    )

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error!</div>

    return (
        <div>
            <h1>Transaction</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

const getTransaction = async (txHash: string) => {
    if (!txHash) throw new Error('Transaction hash is required')
    const response = await fetch(`https://blockstream.info/api/tx/${txHash}`)
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
}


