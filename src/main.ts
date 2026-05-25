import './style/dashboard.css'
import './style/header.css';
import './style/addUser.css';
import './components/addUser';

import { main } from './components/dashboard';
import { header } from './components/header';


const Client = [
  {
  id: '123459',
  lastName: 'Александрова',
  name: 'Татьяна',
  surname: 'Павловна',
  createdAt: '11.01.2021 12:45',
  updatedAt: '11.01.2021 14:11',
  contacts: [
    
  ]
  }
]

export function idClient(): string {
  const result = Client.reduce((nimber, client) => {
    if (nimber < Number(client.id)) {
      return nimber = Number(client.id); 
    }
    return nimber;
  }, 0);
  return String(result + 1);
}

const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
    app.innerHTML = `
        ${header()}
        ${main(Client)}
        
    `;
}

