# td-demo

This project is a quick demo project to showcase some best practices of using Angular.

## To test it at your local

 clone this project to your local

```
 git clone https://github.com/bright-sea/td-demo.git
```

 then cd into locla dirtory, run:

```
npm install
```

 then run
```
npm start
```

open browser and point to http://localhost:4200

you can login as :

email: test@test.com
password: 111111

or sign up with any email and password



Firebase link:

https://console.firebase.google.com/project/td-demo-2ed10/database




## Features we showcase at here:

  <li>Use redux to handle application state
  <li>Separate diffent functionilities into modules ( auth, core, shared, accounts, etc.)
  <li>Lazy loading : accounts module will be loaded when we navigate to it
  <li>Use HttpClient to connect to firebase and handle asynchorized operations levarage reactive programming
  <li>Use firebase to do authentication, also use it to save accounts and fetch accounts.
  <li>Use interceptor to deal cross concerns like logging and auth
  <li>Use auth guard to add some security control: only loginned user can create new account and edit account, manage data menu (fetch data and save data) also only available to loggedin users.
  <li>form control
  <li>sharable directive: dropdownMenu directive can used by both manageData and manageaccount 
  <li> ....
  
## Improvements:
   <li> styles
   <li> security control
   <li> build and deploy
   <li> unit test
   <li> PWA 
   <li> Server side render
   <li>...
   
   
     
  
  
   
 
