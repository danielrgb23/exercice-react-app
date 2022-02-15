import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal}: HeaderProps ) {

    return (
        <Container>
            <Content>
                <h1>Contatos</h1>
                <button type="button" onClick={onOpenNewTransactionModal}>
                   Novo Contato
                </button>
            </Content>
        </Container>
    )
}