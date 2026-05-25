import { idClient } from '../main';


function getAddModalHtml(): string {
  return /*html*/`
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">Новый клиент</h2>
          <button type="button" class="modal-close" id="modal-close">
            <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2333 7.73333L21.2666 6.76666L14.5 13.5334L7.73333 6.76666L6.76666 7.73333L13.5333 14.5L6.76666 21.2667L7.73333 22.2333L14.5 15.4667L21.2666 22.2333L22.2333 21.2667L15.4666 14.5L22.2333 7.73333Z" fill="#B0B0B0"/>
            </svg>
          </button>
        </div>

        <form class="modal-form" id="add-client-form">
          <div class="input-wrap">
            <input type="text" id="surname" class="modal-input" placeholder="Фамилия*" required>
          </div>
          <div class="input-wrap">
            <input type="text" id="name" class="modal-input" placeholder="Имя*" required>
          </div>
          <div class="input-wrap">
            <input type="text" id="lastName" class="modal-input" placeholder="Отчество">
          </div>

          <div class="contacts-block">
            <div class="contacts-list" id="contacts-list"></div>
            <button type="button" class="btn-add-contact" id="btn-add-contact">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99998 3.66665C6.63331 3.66665 6.33331 3.96665 6.33331 4.33331V6.33331H4.33331C3.96665 6.33331 3.66665 6.63331 3.66665 6.99998C3.66665 7.36665 3.96665 7.66665 4.33331 7.66665H6.33331V9.66665C6.33331 10.0333 6.63331 10.3333 6.99998 10.3333C7.36665 10.3333 7.66665 10.0333 7.66665 9.66665V7.66665H9.66665C10.0333 7.66665 10.3333 7.36665 10.3333 6.99998C10.3333 6.63331 10.0333 6.33331 9.66665 6.33331H7.66665V4.33331C7.66665 3.96665 7.36665 3.66665 6.99998 3.66665ZM6.99998 0.333313C3.31998 0.333313 0.333313 3.31998 0.333313 6.99998C0.333313 10.68 3.31998 13.6666 6.99998 13.6666C10.68 13.6666 13.6666 10.68 13.6666 6.99998C13.6666 3.31998 10.68 0.333313 6.99998 0.333313ZM6.99998 12.3333C4.05998 12.3333 1.66665 9.93998 1.66665 6.99998C1.66665 4.05998 4.05998 1.66665 6.99998 1.66665C9.93998 1.66665 12.3333 4.05998 12.3333 6.99998C12.3333 9.93998 9.93998 12.3333 6.99998 12.3333Z" fill="#9873FF"/>
              </svg>
              Добавить контакт
            </button>
          </div>

          <div class="modal-actions">
            <button type="button" class="btn-save" id="bth-save" onclick="contact()">Сохранить</button>
          </div>
        </form>
      </div>
    </div>
  `;
}



function closeAddModal(): void {
  document.getElementById('modal-overlay')?.remove();
}

function bindModalEvents(): void {
  document.getElementById('modal-close')?.addEventListener('click', closeAddModal);
  document.getElementById('btn-cancel')?.addEventListener('click', closeAddModal);
  document.getElementById('modal-overlay')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeAddModal();
  });
}

function openAddModal(): void {
  if (document.getElementById('modal-overlay')) return;

  document.body.insertAdjacentHTML('beforeend', getAddModalHtml());
  bindModalEvents();
}

function getFormattedDate(): string {
    const now = new Date();

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

function contact(): void {
    const id = idClient()
    const nameSurname = (document.getElementById('surname') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
    const newTaime = getFormattedDate()
    const latestChanges = getFormattedDate()
    
    const clientData = {
        id: id,
  lastName: nameSurname,
  name: name,
  surname: lastName,
  createdAt: newTaime,
  updatedAt: latestChanges,
  contacts: [
  ]
    }
    closeAddModal();
}

(window as Window & { openAddModal?: () => void }).openAddModal = openAddModal;
(window as Window & { contact?: () => void }).contact = contact;




