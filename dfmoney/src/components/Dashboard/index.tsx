import { TransactionsTable } from '../TransactionsTable';
import {Container} from './styles'

export function Dashboard() {
    return(
        <Container>
            <TransactionsTable />
        </Container>
    );
}