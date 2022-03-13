# Evact Project  Pseudo Code, plan and checklist title Evac-act
## Backend Checklist
- Build Backend With Express
    -  Build Backend with Django (later on for more django experience)
    - install deps bcrypt express jsonwebtoken mongoose nodemon dotenv heroku cors 
    - create and code file structure 
        - index.js
        - directories
            - db
                - connection
                - item seeds 
                - meeting place seeds 4
            - middleware
                - userAuth
            - models
                - User
                - Evac Grab Item
                - Meeting Place
            - controllers
                - User
                    - post signup, post signin
                - Evac Grab Item
                    - get items, post items, edit items, delete items
                - Meeting Place
                    - get places, post places, edit places, delete places
    - test backend 
    - deploy backend on heroku
        - create Procfile
## Front End Checklist
- Build FrontEnd with React Native
    - install deps axios expo expo-location react-native-elements react-native-maps react-native-safe-area-context react-navigation 
    - create  and code file structure
        - src directories 
            - api
                - googlemaptraffic
                - scannerradio
                - evact 
            - components
                - map
                - scanner player
                - GrabItem Form
                - meeting place form
            - hooks
                - tbd
            - screens
                - about 
                - evac grab list
                - evac grab item detail
                - evac grab list create
                - how to guide
                - location share
                - main
                - scanner radio
                - meeting places 
                - message (stretch)
                



## How to Guide Layout
- First Steps 
    - understand that this app is here to help you in the unfortunate moments when you are forced to evacuate your home. This guide will help you take some pre emptive steps and prepare you for just such an event. That way when the need to evacuate arises, the thoughts about what you want to save and where you will go, will be taken care of. All you will have to do is refer to the lists you make here and execute the plan!
    - First please take a moment to think about what you truly value in your home. To do this you must first ask yourself what are the items  you have, that if permanently lost would devesate you. The things you can not live with out These are your priority number 1 items. At most You will have 10. This is what you will grab if you only have 5 minutes to evacuate. Write these down.   
    - Now, 