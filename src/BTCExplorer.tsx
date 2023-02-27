// explore the bitcoin blockchain
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './Header'
import { BlockPage } from './BlockPage'
import { TransactionPage } from './TransactionPage'
import { AddressPage } from './AddressPage'

const BTCExplorer = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<BlockPage />} />
                <Route path="/block/:blockHash" element={<BlockPage />} />
                <Route path="/tx/:txHash" element={<TransactionPage />} />
                <Route path="/address/:address" element={<AddressPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

const NotFoundPage = () => {
    return <div>Page not found</div>
}
    

export default BTCExplorer;