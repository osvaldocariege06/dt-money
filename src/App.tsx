
import styled from 'styled-components'
import { GlobalStyle } from './styles/globalStyle'
import { Header } from './components/header/index'
import { Dashboard } from './components/Dashboard/index'
import { NewTransactionsModal } from './components/NewTransactionsModal/index'
import { TransactionsProvider } from './hooks/useTransactions'
import Modal from 'react-modal'
import { useState } from 'react'

Modal.setAppElement('#root')

function App() {
 

  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false)

    function handleOpenTransactionsModal(){
        setIsNewTransactionsModalOpen(true)
    }
    function handleCloseTransactionsModal(){
        setIsNewTransactionsModalOpen(false)
    }

  return (
    <TransactionsProvider>
    <GlobalStyle />
    <Header onOpenTransactionsModal={handleOpenTransactionsModal}/>
    <Dashboard /> 

    <NewTransactionsModal
      isOpen={isNewTransactionsModalOpen}
      onRequestClose={handleCloseTransactionsModal} 
    />
    
    </TransactionsProvider>
  )
}

export default App
