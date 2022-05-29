# Search Planet App

This project will display planets data and we can filter the planets based on color, shape and size. We can also search planets through the search bar at the top.

## Project Set Up


### `Installation`

For set up take a clone of master branch. Open the folder in any code editior.First of all we need to install the node in our machine then we need to install all the below listed dependencies with the command provided corresponding to them:
  1. Node Modules - npm i
  2. Axios - npm install axios
  3. React router dom - npm install react-router-dom
  4. Redux - npm install react-redux
  5. Prime react framework -  npm install primereact primeicons primeflex

### `Starting a local server`
We are using JSON server for rest api.
Steps for starting JSON server:
  1. Create a folder where you want to run install the server and run it.
  2. Install JSON server - npm install -g json-server.
  3. Copy the assets/db.json file data and create a new file name.json in the new folder.
  4. Now start the server - json-server --watch db.json --port 300x (pass any value between 1-9       because on 3000 we are running our ui so pass it some different port). 

### `Starting App`

Runs the following command:
  npm start
It will run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



## App Functionalities


### `On first load`
When the aplication first load it will display a search bar at the top, a filter panel on the left and a planet details section.

### `Search Bar`
With the Search bar we can search the planets by providing some text in the input field and click Enter key or click the search icon on the right side of the input field. It willfetch all the planets with the provided value and display them in the planet details section

### `Filter Panel`
Filter Panel contains 3 types of filter.
  1. Filter by Color
  2. Filter by Size
  3. Filter by Shape

In the filter panel we have multiselect check boxes for each value. So we can select any number if values from the filter and it will fetch the planets based on the selected filters. If there is no planet matching with the provided filters it will show "No Data Available".

### `Planet Details Section`
This section will display the planet details like their name, color and shape in row format.
If there in no data or if the filter applied/ search input dosn't matches any planet in the ist then it will show "No Data Available".

### `Share Functionality`
We can share the filtered search also. If one user shares the search result with another user, the exact smae filters will get applied for another user and serach text will also get populated to fetch the filtered result.
