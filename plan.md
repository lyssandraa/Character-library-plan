What do we want to achieve?

We want to make a character library app (Character Vault) in which authors can store information about their characters.

What features do we want in the app?

Signup
Login
Logout
Update account
Delete account
Message change on login
Create character
Assign avatar to character
Update character
Delete character
Characters display
Character page / module
Add character to favourite
Display all favourites
Delete from favourites

What do we need for each feature:

Basic UI

    Header
    Footer
    User container
      Signup
      Login
      Logout
      Update account
      Delete account
    Message container
    Character container
      Create / add character
      Update character
      Delete character
      Display all characters
      Display each character
    Avatar container
      Assign avatar to character
    Favoutire characters container
      Add character to favourite
      Display favourite characters
      Delete from favourites

User container

    General

      BE:
        CORS enabled
        User model

      FE:
        Mode cors

    Signup

      BE:
        User signup route (POST)
        Password hashing
        Endpoint: /users/signup


      FE:
        Request (POST)
        User input / submit
        Endpoint: /users/signup

    Login

      BE:
        User login route (POST)
        Password compare
        Assign token
        Endpoint: /users/login

      FE:
        Request(POST)
        User input / submit
        Endpoint: /users/login

    Logout

      BE:
        User logout route (GET)
        Endpoint: /users/logout

      FE:
        Request(GET)
        Button
        Endpoint: /users/logout

    Update account

      BE:
        User update route (PUT)
        Password compare?
        Endpoint: /users/update

      FE:
        Request(PUT)
        User input / submit
        Endpoint: /users/update

    Delete account

      BE:
        User delete route (DEL)
        Password compare
        Endpoint: /users/delete

      FE:
        Request(DEL)
        User submit
        Endpoint: /users/delete

Message container

    FE:
      Usestate

Character container

    General

      BE:
        CORS enabled
        Character model

      FE:
        Mode cors

    Add / create character

      BE:
        Character create route (POST)
        Endpoint: /chr/createChr

      FE:
        Request(POST)
        User input / submit
        Endpoint: /chr/createChr

    Update character

      BE:
        Character update route (PUT)
        Endpoint: /chr/updateChr

      FE:
        Request(PUT)
        User input / submit
        Endpoint: /chr/updateChr

    Delete character

      BE:
        Character delete route (DEL)
        Password compare
        Endpoint: /chr/deleteChr

      FE:
        Request(DEL)
        User submit
        Endpoint: /chr/deleteChr

    Display all characters

      BE:
        Character get route (GET)
        Protected route?

      FE:
        Request(GET)

    Display each character

      BE:
        Character get route (GET)
        Protected route?

      FE:
        Request(GET)
        Click event?

Avatar container

    General:

      BE:
        Fetch data from API
        Extract relevant data

      FE:
        Fetch data from BE

    Assign avatar:

      BE:
        Association?

      FE:
      ??

Favourite characters container

    General

      BE:
        CORS enabled
        Favourite character model

      FE:
        Mode cors

    Add to favourite

      BE:
        Favourite add route (POST)
        Endpoint: /faves/addFave

      FE:
        Request(POST)
        Button
        Endpoint: /faves/addFave

    Display favourite characters

      BE:
        Favourite get route (GET)
        Protected route?
        Endpoint: /faves/getFaves

      FE:
        Request(GET)
        Button
        Endpoint: /faves/getFaves

    Delete from favourites

      BE:
        Favourite delete route (DEL)
        Endpoint: /faves/deleteFave

      FE:
        Request(DEL)
        Delete button
        Endpoint: /faves/deleteFave

Order of operations:

Step 1: Basic UI
Step 2: Signup
Step 3: Login
Step 4: Log out
Step 5: Update account
Step 6: Delete account
Step 7: Dynamic message
Step 8: Add character
Step 9: Update character
Step 10: Delete character
Step 11: Display all characters
Step 12: Display each character
Step 13: Add to favourite
Step 14: Display all favourites
Step 15: Delete from favourite

Stretch goals:

Admin role
Public vs private characters
Cookies
Persistent login
Different collections

External API:
https://www.dicebear.com/how-to-use/http-api/
