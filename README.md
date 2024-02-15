# React-Frontend-D3V   
  

***How to launch the application locally***  
* clone the repo or donwload the zip file
* install node modules using `npm install`
* start the application using `npm run dev`
  
  
***the structutr of the applocation***  
**Project Structure**  
***Every component contain 2 files Component.jsx and Component.css***  

```
└── root
    ├── public
    ├── src
    │   ├── component
    │   │   ├── button
    │   │   ├── heading
    │   │   ├── inputbox
    │   │   ├── logout
    │   │   ├── mydetails
    │   │   ├── pagination
    │   │   ├── productcard
    │   │   ├── search
    │   │   ├── sort
    │   │   ├── subheading
    │   │   └── warning
    │   └── pages
    │       ├── dashboard
    │       │   ├── dashboard.jsx
    │       │   └── dashboard.css
    │       ├── login
    │       │   ├── login.jsx
    │       │   └── login.css
    │       ├── product
    │       │   ├── product.jsx
    │       │   └── product.css
    │       └── register
    │           ├── register.jsx
    │           └── register.css
    ├── App.jsx
    ├── main.jsx
    ├── index.html
    ├── package.json
    └── vite.config.js
```

***How to use the application***  
1. Project is live on Netlify: https://react-frontend-d3v.netlify.app/
2. Routes:
   - home:  "/"
   - login: "/login"
   - register "/register"
   - product "/product"
3. On home route you can use these features
   - Search by Name or Description
   - Sort by Name
   - Sorct by Price
   - Pagination (10 products per page)
4. On top left you can se your initial if you are an "Authenticated User" otherwise "NA"
5. On top right you can logout and get rediredted to login page,if present it also clears the "JWT Token" from local storage.
6. Login only Works for JWT Authenticated Users.
7. You can use following username and password to login, more available on https://dummyjson.com/users
   - "username": "rshawe2","password": "OWsTbMUgFc",
   - "username": "hbingley1","password": "CQutx25i8r",
   - "username": "atuny0","password": "9uQFF1Lh",
8. After successful Login you get a JWT Token back that is being stored in your local storage.
9. Register works for all the Users.
10. If you register using fisrtname and lastname you can see your initials on top left otherwise "NA"
11. Each product has a "View Details" button on click you gets redirect to "/product" routes.
12. On "/product" route you can see detailed information about a product including image, price etc.
13. This application has a "responsive design" that looks good on desktop and mobile devices.

  -----------------------X------------------------------------------X-------------------------
