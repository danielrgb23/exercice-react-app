import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import App from './App';

createServer({
 models: {
   transaction: Model,
 },

 seeds(server) {
   server.db.loadData({
    transactions: [
      {
        id: '001001', 
        name: 'Jose da Silva',
        email: 'jose@email.com',
        tel: ('11 99901-1234'),
      },
      {
        id: '001002', 
        name: 'Marcio de Souza',
        email: 'marcio@email.com',
        tel: ('11 99902-1234'),
      },
      {
        id: '001003', 
        name: 'Mauricio Cruz',
        email: 'mauricio@email.com',
        tel: ('11 99903-1234'),
      },
      {
        id: '001004', 
        name: 'Fabiana Dias',
        email: 'fabiana@email.com',
        tel: ('11 99904-1234'),
      }
    ],
   })
 },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
}) 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
