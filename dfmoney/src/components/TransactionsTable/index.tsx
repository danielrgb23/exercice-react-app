import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead> 
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de websites</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>03/12/2020</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">-R$1.200</td>
                        <td>Casa</td>
                        <td>19/12/2020</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}