# Evact Project  Pseudo Code, plan and checklist title Evac-act

## Updated Pseudocode plan
- change from useContext to redux for more advanced state management
    - specifically use store for persisting data after app close 
    - this should fix the list update bugs 
- add react-native-maps to meeting places
    - meeting place list options 
        - turn meeting places into cards 
        - use meeting places to plot directly on a map (google)
        - add get directions button (google maps force or directions plot with polyline?)
    - 
- add animation to item list 
- change welcome screen to swipe cards through to login screen
- use facebook login modal
    - instagram login modal?
    - google login modal ? 
    - have option from homepage to mark as safe?


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
    - First Step please take a moment to think about what you truly value in your home. To do this you must first ask yourself what are the items  you have, that if permanently lost would devesate you. The things you can not live with out These are your priority number 1 items. At most You will have 10. This is what you will grab if you only have 5 minutes to evacuate. Write these down.
    - Second Step find the important documents you have, that will be important to have copies of in event the originals are destroyed.
        - These should include indentification (such as Id or Passport), insurance cards, deeds to the house etc. 
        - Take a photo of each of these documents and save them to a flash drive or save the copies somewhere secure! Add this Document Backup to your Grab Item List and Give it a priority of 1. 
    - Almost There! 
    - Third Step Decide on 4 places that you can go in the event of an evacuation. One For each North South East and West. 
        - add each Place to the Meeting Places section.
    - Fourth from here you can start to think about items that are priority 2 and below. Helpful Tips, add no more than 10 to each level of priority. Think about adding things like clothes, food, and sleeping gear.
        Once these steps have been completed, you are at least a little bit more prepared and hopefully you never need it. If you do remember you've made the list and plan, just execute quickly and stay safe!


    Remember You will not be able to take everything. Prioritze what matters most, and take only those. 

## notes for continuing priject to deployment.
- user can create group and invite others into it

- Function using Mapviews to track members of user group
- build messaging app separately then add it into code block for users
