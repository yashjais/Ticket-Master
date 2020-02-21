## Ticket-Master

Ticket Master is a ticketing Application, which provides an interface through which a user can generate tickets. A ticket is generated when a customer have a complain about a certain service, then that ticket can be assigned to a employer based on the department and a priority can be given based on the urgency of the matter.

## Description

CRUD operation can be done effectively on Customers, Departments, Employees, Tickets.
Departments have a special functionality in which if you delete a particular department having employess, the employees will now automatically belong to a uncategorized department.
Even if you delete certain section assciated with another section, the code will work. For Ex.- if you delete a customer associated with a ticket, the code will not stop working.
Full User Authentication is integrated in this project.

## Dependencies

### Back-End
 
1. bcrypt: "^3.0.8",
2. concurrently: "^5.0.2",
3. cors: "^2.8.5",
4. express: "^4.17.1",
5. jsonwebtoken: "^8.5.1",
6. lodash: "^4.17.15",
7. mongoose: "^5.8.11",
9. validator: "^12.2.0"

### Front-End

1. axios: "^0.19.2",
2. react: "^16.12.0",
3. react-dom: "^16.12.0",
4. react-redux: "^7.1.3",
5. react-router-dom: "^5.1.2",
6. react-scripts: "3.3.0",
7. redux: "^4.0.5",
8. redux-thunk: "^2.3.0"

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `nodemon index.js` || `npm dev server`

Runs the back-end app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3020) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

You will be needing postman if you only run Backend.

### `npm start`

Runs the front-end app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
