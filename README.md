# E-Commerce Back End

</br>

![Github License](https://img.shields.io/badge/license-MIT-blue.svg)

</br>

---

##   📝 Description


---

</br>

The purpose of this repository is to build the back end for an e-commerce site by modifying starter code. Configuring a working Express.js API to use Sequelize to interact with a MySQL database and testing routes using insomnia.

</br>

---


##   ⌨️ Programming Languages & Technologies
---

</br>

<div style="display: inline_block">

[![JavaScript](./assets/javascript.svg)](https://devdocs.io/javascript/)
&nbsp;&nbsp;
[![NodeJS](./assets/nodejs.svg)](https://nodejs.org/en/docs)
&nbsp;&nbsp;
[![ExpressJS](./assets/expressjs.svg)](https://expressjs.com/en/4x/api.html)
&nbsp;&nbsp;
[![Sequelize](./assets/sequelize.svg)](https://sequelize.org/api/v6/identifiers)
&nbsp;&nbsp;
[![MySQL](./assets/mysql.svg)](https://dev.mysql.com/doc/)
&nbsp;&nbsp;
[![Insomnia](./assets/insomnia.svg)](https://docs.insomnia.rest/)
&nbsp;&nbsp;
[![Screencastify](./assets/screen-castify-red.svg)](https://learn.screencastify.com/hc/en-us)

</div>

</br>


---

## 📑 Table of Contents

---

</br>

- [Installation](#💿-installation)
- [Usage](#💻-usage)
- [License](#🔏-license)
- [Credits](#🖋️-credits)
- [Tests](#🧪-tests)
- [User Story](#✍️-user-story)
- [Acceptance Criteria](#👏-acceptance-criteria)


</br>


---

##  💿 [Installation](#📑-table-of-contents)

---

</br>

1. Fork and clone repository to local machine 
2. Run `npm i` to install dependencies in local project directory



</br>


---

##   💻 [Usage](#📑-table-of-contents)

---

</br>

1. Open integrated terminal
2. Run `mysql -u root -p` to connect to mysql
3. Run `db/schema.sql` to create the database
3. Run `npm run seed` to populate the database with seeds
4. Run `npm start` to initialize the server
5. Use `insomnia` to test API calls


</br>

The github URL containing the code for this project is located at:

https://github.com/Maelikah/M12_EmployeeTracker

</br>

Code Walkthrough Functionality:

![Code Walkthrough Preview](./assets/Code-Walkthrough.gif)

</br>


---

##  🔏 [License](#📑-table-of-contents)

---

</br>


 This project is licensed under the terms of the `MIT` license. 


</br>


---

## 🖋️ [Credits](#📑-table-of-contents)

---

</br>


- https://shields.io/category/license
- https://github.com/devicons/devicon/tree/master/icons
- https://nodejs.org/en/docs
- https://javascript.info/async-await
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
- https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/
- https://sequelize.org/api/v6/identifiers
- https://dev.mysql.com/doc/
- https://coding-boot-camp.github.io/full-stack/computer-literacy/video-submission-guide

</br>


---

##   🧪 [Tests](#📑-table-of-contents)

---

</br>



NA


</br>


---

## ✍️ [User Story](#📑-table-of-contents)

---

</br>

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

```


</br>

---

## 👏 [Acceptance Criteria](#📑-table-of-contents)

---

</br>


```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
 
```

</br>


---

[Back to Top](#e-commerce-back-end)