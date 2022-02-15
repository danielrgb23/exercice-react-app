import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactionsContext';

import closeImg from '../../assets/close.svg';


import { Container } from './styles';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');

  const [tel, setTel] = useState('')

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      name, 
      id,
      email, 
      tel,
    })
    
    setName('');
    setId('');
    setEmail('');
    setTel('');
    onRequestClose();
  
  }

  
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close">
        
        <img src={closeImg} alt="Fechar Modal" />
      </button>

       <Container onSubmit={handleCreateNewTransaction}>   
    
    <h2>Registrar Novo Contato</h2>

      <input 
      type="text"
      placeholder="id"
      value={id} 
      onChange={event => setId((event.target.value))}
      />

      <input 
      placeholder="Nome"
      value={name} 
      onChange={event => setName(event.target.value)}
      />

      <input 
      type="email"
      placeholder="email"
      value={email}
      onChange={event => setEmail(event.target.value)}
      />

      <input 
      type="tel"
      placeholder="Telefone"
      value={tel} 
      onChange={event => setTel((event.target.value))}
      />

     <button type="submit">
       Cadastrar
     </button>
    </Container>  
    </Modal>
    );
}