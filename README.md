#iCurate

This is a mobile app (currently only IOS) that enables search, labeling, and curation of pdfs mainly for the goal of scientific litereature.  To get this started you need to have node and node package manager installed

Install Cordova Ionic

    $ npm install -g cordova ionic
Next download git repo
    
    $ git clone git@github.com:alexfrieden/iCurate.git
    
Setup ios
    
    $ ionic platform add ios
    $ ionic build ios
    $ ionic emulate ios
    
Now it should pop up an iOS simulator to play around with.  I have only tested this on my macbook air.  