// import FUNCTION from SRC

// AQUÍ se llama a las funciones de despliegue para las distintas views, llamando primero a la función de despliegue principal
import loadInitialPage from './views/initialPage'
import './main.css'
// import 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'


start();

function start() {
  loadInitialPage();
}
