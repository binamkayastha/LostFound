# LostFound [In Progress]

A lost and found app built with cordova and react.js

# How to build

    npm install # Only need to do this once
    npm run build

plug in your android phone

    cd Cordova
    cordova platform add android # Only need to do this once
    cordova run android

# Project Folder Structure
Base structure taken from here:
https://daveceddia.com/react-project-structure/

Specs will live in the same place as their counterparts, as in this project we practice heavy TDD.

# Packages philosophy
It doesn't matter how many packages I tack on, as long as it makes development easier. However, the more invasive a package is the more likely it won't be used in this project.

For example react-scripts allows developers to easily build and test react programs. With this, we can develop without even needing to understand Babel and how ES6 needs to be transpiled into original javascript and so on and so forth. Plus it's a devDependency, so it has no effect on the user.

# Help needed
Create a docker container if you want.
