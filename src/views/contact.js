function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');

  const paragraph = document.createElement('p');
  paragraph.innerText = 'Contact page example'

  contact.appendChild(paragraph);

  return contact;
}

function loadContact() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;