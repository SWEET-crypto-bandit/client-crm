import './style/dashboard.css'
import './style/header.css';
import './style/addUser.css';
import './components/addUser';

import { main } from './components/dashboard';
import { header } from './components/header';
import {Client} from './client.ts'



export function idClient(Client: any): string {
  const result = Client.reduce((nimber: any, client: any) => {
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

