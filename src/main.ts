import './style/header.css';
import { header } from './components/header';

const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
    app.innerHTML = header()
}