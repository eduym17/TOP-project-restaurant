function createContact() {
  const contact = document.createElement('div');
  contact.classList.add('contact');
  
    const contactHeader = document.createElement('p');
    contactHeader.innerText = 'Get in touch at light speed!';
    contactHeader.classList.add('contactHeader');

  const contactContent = document.createElement('div');
  contactContent.classList.add('contactContent');

  const contactChefImg = document.createElement('img');
  contactChefImg.classList.add('contactChefImg');
  contactChefImg.src = '../src/assets/images/chefHome.png';
  
  const contactData = document.createElement('div');
  contactData.classList.add('contactData');

  const contactPhone = document.createElement('p');
  contactPhone.innerText = "📱 123 456 789";
  contactData.appendChild(contactPhone);

  const contactAddress = document.createElement('p');
  contactAddress.innerText = "🌌 Find my in the Milky Way";
  contactData.appendChild(contactAddress);

  const contactAddressImg = document.createElement('img')
  contactAddressImg.src = '../src/assets/images/address.png'
  contactAddressImg.classList.add('contactAddressImg')
  contactData.appendChild(contactAddressImg);

  contactContent.appendChild(contactChefImg)
  contactContent.appendChild(contactData)

  contact.appendChild(contactHeader);
  contact.appendChild(contactContent);

  return contact;
}

function loadContact() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;