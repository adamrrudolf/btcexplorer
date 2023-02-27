// type Transaction

export interface Transaction {
    txid: string;
    hash: string;
    version: number;
    size: number;
    vsize: number;
    weight: number;
    locktime: number;
    vin: Vin[];
    vout: Vout[];
    hex: string;
    blockhash: string;
    confirmations: number;
    time: number;
    blocktime: number;
}

// type Block
export interface Block {
    id: string
    height: number
    version: number
    timestamp: number
    tx_count: number
    size: number
    weight: number
    merkle_root: string
    nonce: number
    bits: number
    difficulty: number
    previousblockhash: string
    nextblockhash: string
    median_time: number
    chainwork: string
    n_tx: number
    confirmed: boolean
    status: string
    tx: Transaction[]
}

// type Transaction

export interface Transaction {
    txid: string
    hash: string
    version: number
    size: number
    vsize: number
    weight: number
    locktime: number
    vin: Vin[]
    vout: Vout[]
    hex: string
    blockhash: string
    confirmations: number
    time: number
    blocktime: number
    value_out: number
    size_in: number
    fees: number
}

// type Vin

export interface Vin {
    txid: string
    vout: number
    scriptSig: ScriptSig
    sequence: number
    txinwitness: string[]
    coinbase: string
    value: number
    valueSat: number
    doubleSpentTxID: null
}

// type ScriptSig

export interface ScriptSig {
    asm: string
    hex: string
}

// type Vout

export interface Vout {
    value: number
    n: number
    scriptPubKey: ScriptPubKey
    spentTxId: null
    spentIndex: null
    spentHeight: null
}

// type ScriptPubKey

export interface ScriptPubKey {
    asm: string
    hex: string
    reqSigs: number
    type: string
    addresses: string[]
}

// type Address

export interface Address {
    address: string
    chain_stats: ChainStats
    mempool_stats: MempoolStats
    tx_count: number
    txs: Tx[]
}

// type Tx

export interface Tx {
    txid: string
    version: number
    locktime: number
    vin: Vin[]
    vout: Vout[]
    status: Status
    block_height: number
    block_hash: string
    block_time: number
    value: number
    value_in: number
    fees: number
    size: number
    weight: number
    fee_per_vsize: number
    estimated_btc_sent: number
    estimated_btc_sent_vin: number
    estimated_btc_sent_vout: number
    estimated_btc_sent_fee: number
    estimated_btc_sent_change: number
    estimated_btc_spent: number
    estimated_btc_spent_vin: number
    estimated_btc_spent_vout: number
    estimated_btc_spent_fee: number
    estimated_btc_spent_change: number
}

// type Status

export interface Status {
    confirmed: boolean
    block_height: number
    block_hash: string
    block_time: number
}

// type ChainStats

export interface ChainStats {
    funded_txo_count: number
    funded_txo_sum: number
    spent_txo_count: number
    spent_txo_sum: number
    tx_count: number
}

// type MempoolStats

export interface MempoolStats {
    funded_txo_count: number
    funded_txo_sum: number
    spent_txo_count: number
    spent_txo_sum: number
    tx_count: number
}
