import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { Block } from './types'

export const BlockPage = () => {
    const { blockHash } = useParams()
    const { data, isLoading, isError } = useQuery<Block, Error>(
        ['block', blockHash],
        () => getBlock(blockHash as string),
        { enabled: !!blockHash }
    )

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error!</div>

    return (
        <div>
            <h1>Block</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

const getBlock = async (blockHash: string) => {
    if (!blockHash) throw new Error('Block hash is required')
    const response = await fetch(`https://blockstream.info/api/block/${blockHash}`)
    if (!response.ok) throw new Error(response.statusText)
    return response.json()
}
