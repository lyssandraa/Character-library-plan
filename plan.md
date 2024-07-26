What do we want to achieve?

we are making an app to store charecter information for authors

what features do we need?

Signup
Login
logout
message confirmation that user is logged in
delete account
Create character
dispaly user's characters
character cards to hold information for individual characters
add character to favourites
delete character
sharing characters with other users
Admin permition to view all characters

what are we going to need for each feature?

Basic UI
    
    Header
    Footer
    LoginOrSign
         Sigh up
         Login
         character container

         Signup

       BE:
       CORS ENABLED
       User model/User signup route (POST)
       Password hashing

       FE:
       Request(POST), mode CORS
       User input/submit in a component

Login

    BE:
    CORS ENABLED
    User model/User login route (POST)
    Password compare
    endpoint: /users/login

    FE:
    Request(POST), mode CORS
    User input/submit in a component
    endpoint: /users/login

    Order of Operations:

    Step1: Basic Ui
    Step 2: Signup
    Step 3: Log in
    Step 4: Log out
    step 4.5: allow users to update account info
    stap 5: Container to hold user's characters
    step 6: Card to hold information for individual characters
    step 7: Create a character
    step 8: delete a character
    step 8.5: seperate catogory for favourites
    step 9: User can add character to 'favourite' catagory
    step 10: share character with other users
    step 11: use tokens to assign 'Admin' permitions