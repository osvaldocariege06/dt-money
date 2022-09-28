

import { useTransactions } from '../../hooks/useTransactions';
import { Container } from "./styles";

import depositImg from '../../assets/images/arrow-down.svg'
import withdrawImg from '../../assets/images/arrow-up.svg'
import totalImg from '../../assets/images/dollar-sign.svg'

export function Summary(){
    
    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {

        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount; 
            acc.total += transaction.amount;
        }else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })
    

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img className='icon-img' src={depositImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img className='icon-img' src={withdrawImg} alt="Saídas" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img className='icon-img' src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}