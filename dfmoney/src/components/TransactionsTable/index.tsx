import { useTransactions } from "../../hooks/useTransactionsContext";

import { Container } from "./styles";

export function TransactionsTable() {
    const { transactions } = useTransactions();

    return (
        <Container>
            <table>
                <thead> 
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                    </tr>
                </thead>

                <tbody>
                   {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.name}</td>
                        <td>{transaction.email}</td>
                        <td>{transaction.tel}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Container>
    );
}