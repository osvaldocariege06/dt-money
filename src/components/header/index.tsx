

import logoImg from '../../assets/images/dollar-sign.svg'
import { } from 'react-modal'
import { Container, Content } from "./styles"
import { useState } from 'react'

interface HeaderProps{
    onOpenTransactionsModal: () => void
  }

export function Header({ onOpenTransactionsModal }: HeaderProps){
    
    return(
        <Container>
            <Content>
                <a href="#">DT Money</a>
                <button type="button" onClick={onOpenTransactionsModal}>
                    Nova transação
                </button>

                
            </Content>
        </Container>
    )
}