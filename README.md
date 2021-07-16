# Schedule-Planner

![homepage](https://user-images.githubusercontent.com/80148678/126001911-223287f2-0536-4200-9596-89a6988af7b7.png)

## Introduction
This React application allows users to plan out their schedule. 

Users input:
* Title of Event
* Start time and date
* End time and date
* Description of Event

The scheduler lists out all events created and provides the option to add specific events to Google Calendar. 

## Set Up

Install Dependencies
```
npm install
```

Run React
```
npm start
```

Run JSON Server
```
npm run server
```
To add events to Google Calendar, you can add a .env file the contains: 
* REACT_APP_CLIENT_ID = **_Your Client ID_**
* REACT_APP_API_KEY = **_Your API Key_**

Instructions on how to retrieve the id and key can be found [here](https://developers.google.com/workspace/guides/getstarted-overview).
