function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  const menuHeader = document.createElement('p');
  menuHeader.classList.add('menuHeader');
  menuHeader.innerText = 'What do you want to eat today?';

  const menuHeaderMsg = document.createElement('p');
  menuHeaderMsg.classList.add('menuHeaderMsg');
  menuHeaderMsg.innerText = 'We have plenty of options for you:';
  menuHeader.appendChild(menuHeaderMsg)

  const menuFoods = document.createElement('div')
  menuFoods.classList.add('menuFoods')
  
  menu.appendChild(menuHeader);
  menu.appendChild(menuFoods);

  menuFoods.appendChild(createFood(
    "Burger",
    "Bacon, onions, garlic, barbecue sauce, egg, ketchup and more"
  ));

  menuFoods.appendChild(createFood(
    "Chinese",
    "Choose among a lot of dishes from the traditional chinese food"
  ));

  menuFoods.appendChild(createFood(
    "Coffee",
    "Are you still sleepy? This may be the best option to start the day!"
  ));

  menuFoods.appendChild(createFood(
    "Donnut",
    "Homer Simpson we know you are around here"
  ));
 
  menuFoods.appendChild(createFood(
    "FrenchFries",
    "You know you want this..."
  ));
 
  menuFoods.appendChild(createFood(
    "FriedChicken",
    "KFC you could be advertising here, think about it, we are going to be famous"
  ));

  menuFoods.appendChild(createFood(
    "Muffin",
    "Nope, it does not contain the M-agic ingredient"
  ));

  menuFoods.appendChild(createFood(
    "Pizza",
    "Better than the Krusty Krab one"
  ));

  menuFoods.appendChild(createFood(
    "Sandwich",
    "Perfect mix to french fries"
  ));

  menuFoods.appendChild(createFood(
    "Sushi",
    "Raw fish, ewww"
  ));

  menuFoods.appendChild(createFood(
    "Taco",
    "Viva México, wey!"
  ));

  return menu;
}

function createFood(name, description) {
  const menuFood = document.createElement('div');
  menuFood.classList.add('menuFood')

  const foodName = document.createElement('p');
  foodName.classList.add('foodName');
  foodName.innerText = name;

  const foodDescription = document.createElement('p');
  foodDescription.classList.add('foodDescription');
  foodDescription.innerText = description;

  const foodImage = document.createElement('img');
  foodImage.classList.add('foodImage');
  foodImage.src = `../src/assets/images/foods/${name.toLowerCase()}.png`;

  menuFood.appendChild(foodImage);
  menuFood.appendChild(foodName);
  menuFood.appendChild(foodDescription);

  return menuFood;
}

function loadMenu() {
  const main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;