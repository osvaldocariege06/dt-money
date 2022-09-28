

import { FormEvent, useContext, useState } from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/images/window-close.svg'
import { api } from '../../services/api'
import { useTransactions } from '../../hooks/useTransactions'
import { Container, RadioBox, TransactionTypeContainer } from './styles'

interface NewTransactionsModalProps{
    isOpen: boolean, 
    onRequestClose: () => void
}

export function NewTransactionsModal({ isOpen, onRequestClose }:NewTransactionsModalProps){

  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')

  async  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault(); 

    await createTransaction({
      title,
      amount,
      category,
      type,
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    
    onRequestClose();
   
  }
  
    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">

          <button
            type='button' 
            onClick={onRequestClose}
            className='react-modal-close'  
          > 
            Fechar modal
          </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar Transação</h2>

          <input 
            type="text"
            placeholder='Titulo'
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <input 
            type="number"
            placeholder='Valor' 
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox
              type='button'
              isActive={type === 'deposit'}
              activeColor='green'
              onClick={() => { setType('deposit') }}
            >
              <span>Entradas</span>
            </RadioBox>
            <RadioBox
              type='button'
              isActive={type === 'withdraw'}
              activeColor='red'
              onClick={() => { setType('withdraw') }}
            >
              <span>Saídas</span>
            </RadioBox  >
          </TransactionTypeContainer>

          <input 
            placeholder='Categoria'
            value={category}
            onChange={event => setCategory(event.target.value)}
          />
          <button type="submit">
              Cadastrar
          </button>
        </Container>
      </Modal>
    )
}