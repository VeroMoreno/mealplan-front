 <div style="text-align:center"><img src="./img/mealplan.png" alt="background" style="width:70%; margin-left:auto; margin-right:auto; display: block; width:300px"/></div>

FYI at the end

# 🌱 Mealplan!
Javascript-based application that randomly displays a menu of meals (own recipes) from Monday to Friday
You can use the draggable to change the position of the cards.
You can also see in the chart the nutritional information by day and week.
Meals are only organized into lunch and dinner, differentiating that there are some foods that cannot be included at dinner.
Check your food list by clicking on "check list" button.

### Feature
Developed with ⚡️ React Hooks [ useState, useEffect, useContext, useRef ]
* Functional components (State-less Functions)
* Context API

### Technologies
* ✨ Node.js
* 💣 React
* 💅🏾 Styled Components

### Funcionality
* Show meal list clicking at "check list" button
* Sorts meals randomly clicking at "Random" button
* Drag & drop meals
* Nutrient charts (By day and by week)

### Dependencies
* chart.js
* react-chartjs-2
* react-beautiful-dnd
* styled-components

### How to
NPX, to install packages that react needs
```shell
 npm install -g npx (test version: npx -v)
```

Later of have **node** & **npm** installed execute `npx create-react-app nameOfProjectWithouthComillas`

To verify that the package has been installed successfully, run in the console: `create-react-app` and wait for a successful installation message.

 Lets see!: `npm start`

### To be continue...
* Window.localStorage
* backend

* Fyi
Ahora mismo el proyecto está preparado para funcionar apuntando a la api mealplan-back,
por este motivo no voy a hacer la build para github pages.

En todo caso, ahora cuando intento obtener la info de menuData.json no funciona.
Ya que de algun modo la manera en la que se ha formado el json es distinta en bbdd que
en el propio json "a pelo". Revisar.