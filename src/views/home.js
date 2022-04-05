function createHome() {
  const home = document.createElement('div');
  home.classList.add('home');

  const homeHeader = document.createElement('p');
  homeHeader.classList.add('homeHeader');
  homeHeader.innerText = 'Welcome to the best restaurant in the galaxy';

  const homeContent = document.createElement('div');
  homeContent.classList.add('homeContent');

  const homeContentMsg = document.createElement('p');
  homeContentMsg.classList.add('homeContentMsg');
  homeContentMsg.innerText = 'This is (by far) the best experience for your palate, meet our chef, he is from another world (literally). His name is Pancho!';

  const homeImg = document.createElement('img');
  homeImg.classList.add('chefHome');
  homeImg.src = '../src/assets/images/chefHome.png'

  homeContent.appendChild(homeContentMsg);
  homeContent.appendChild(homeImg);

  home.appendChild(homeHeader);
  home.appendChild(homeContent);

  return home;
}

function loadHome() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;