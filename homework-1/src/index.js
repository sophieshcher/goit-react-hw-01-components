import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from "./profile/profile"
import App from "./App/app.js"

let userInformation ={
    username: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308
    }
}

let elements = (
  <React.StrictMode>
  <App> 
  <Profile
   photoURL={userInformation.avatar} 
   userName={userInformation.username}
   userTag={userInformation.tag}
   userLocation={userInformation.location}
   quantityOfFolowers={userInformation.stats.followers}
   quantityOfViews={userInformation.stats.views}
   quantityOfLikes={userInformation.stats.likes}
  />
  </App>
    
  
</React.StrictMode>
);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(elements)
