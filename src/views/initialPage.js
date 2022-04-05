import loadContact from './contact';
import loadHome from './home'
import loadMenu from './menu'

function createHeader() {
  const header = document.createElement('header')
  header.classList.add('header');

  const logoContent = document.createElement('div');
  logoContent.classList.add('logoContent');

  const logoIcon = document.createElement('img');
  logoIcon.classList.add('logoIcon');
  logoIcon.src = '../src/assets/icons/l-white.png';
  logoContent.appendChild(logoIcon);

  const logo = document.createElement('a');
  logo.textContent = 'AsteroiFood';
  logo.classList.add('logoName', 'logoAnchor');
  logo.href = "https://youtu.be/dQw4w9WgXcQ"; //change
  logo.target = '_blank'; //remove
  logoContent.appendChild(logo);
  
  header.appendChild(logoContent);
  header.appendChild(createNav());
  
  return header;
}

function createNav() {
  const navBar = document.createElement('div');
  navBar.classList.add('navBar');
  
  const home = document.createElement('b');
  home.innerText = 'Home';
  home.classList.add('navItem', 'navAnchor');
  home.addEventListener("click", () => {
    loadHome();
  });

  
  const menu = document.createElement('a');
  menu.innerText = 'Menu';
  menu.classList.add('navItem', 'navAnchor');
  menu.addEventListener('click', () => {
    loadMenu();
  });

  
  const contact = document.createElement('a');
  contact.innerText = 'Contact';
  contact.classList.add('navItem', 'navAnchor');
  contact.addEventListener('click', () => {
    contact.classList.add('active')
    loadContact();
  });
  
  navBar.appendChild(home);
  navBar.appendChild(menu);
  navBar.appendChild(contact);
  
  return navBar;
}

function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  return main;
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer')

  const githubLink = document.createElement('a');
  githubLink.classList.add('githubLink');
  githubLink.href = "https://github.com/eduym17";
  githubLink.innerText = `${new Date().getFullYear()} ©Eduardo Yañez`;
  githubLink.target = '_blank';

  const githubImage = document.createElement('img');
  githubImage.classList.add('githubImage');
  githubImage.src = '../src/assets/icons/GitHub-Mark-Light-32px.png'

  const asteroidevBrand = document.createElement('img');
  asteroidevBrand.classList.add('brandLogo');
  asteroidevBrand.src = '../src/assets/icons/h-white-gradient.png';

  githubLink.appendChild(githubImage);

  footer.appendChild(githubLink);
  footer.appendChild(asteroidevBrand);

  return footer;
}

function loadInitialPage() {
  const content = document.getElementById('content');

  const header = createHeader();
  content.appendChild(header);

  const pageContent = createMain('pageContent');
  content.appendChild(pageContent);

  const footer = createFooter();
  content.appendChild(footer);

  loadHome();
}

export default loadInitialPage;