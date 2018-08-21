# sampleproject
It is a Single Page MEAN stack application.AngularJS frontend,Node.js backend with Express and MongoDB.
Here used the Webstorm WebIDE to develop this application
Home Page for user to post his messages
Inbox to see his messages and delete the message on his demand.
Message search will able the user to search a message by it's message id and able to see whether the message is a palindrome or not.
In public folder:-
Javascripts folder consists of all js files related to frontend 
models folder consists of mongoDB schema and backend operations
partials folder consists of views that displayed on single page application
routes folder consists of index.js file where the server related things will be present
views folder consists of main view for the all views in partials
db.js it is a configuration file for mongodb
app.js is the main file where we define express app

1.when the user posts message it will come to repective controller check whether it is a palindrome then call the https://<applicationurl>/saveMessage from the frontend service file and store the message
2.when user routed to inbox we call the https://<applicationurl>/getMessages to see all the messages and deleting it call the https://<applicationurl>/deleteMessage/messageid/<messageid>
3.when user search for a particular message call the https://<applicationurl>/getMessage/messageid/<messageid>


Deployed the application to google cloud platform using google cloud SDK Shell.

1.Created a free tier account in google cloud platform
2.installed the google cloud SDK Shell in localmachine
3.initialize the configuaration using      "gcloud init" and created a project and enabled the billing for that project
4.go into the directory where the application resides and then use "gcloud app deploy" command to deploy my application

note:- to deploy that application create app.yaml file in the project directory with the following fileds
runtime: nodejs
env : flex

5.now we will get application url
6.Here i used mlab for mongodb


RESTAPI Documentation:-

1.http://localhost:3000/saveMessage or http://<applicationurl>/saveMessage with reqbody 

Field         Type

Message       String

Palindrome     Boolean

created_at     Date

successfully posted - status 200 - Message saved

error -status 500 -messagecan't be saved

2.http://localhost:3000/getMessages or http://<applicationurl>/getMessages 

success - give all the messages
error - 500 - error occured while retrieving the messages

3.http://localhost:3000/getMessage/messageid/<messageid> or http://<applicationurl>/getMessage/messageid/<messageid>

success - give the data
error -404 -message not found with that message id
     -500-internal error

3.http://localhost:3000/deleteMessage/messageid/<messageid> or http://<applicationurl>/deleteMessage/messageid/<messageid>

success-200-message successfully deleted
error-404-not found a message with that id
      500-error occured while deleting the message

