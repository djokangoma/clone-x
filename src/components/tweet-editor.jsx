import React from 'react';

 function TweetEditor(){
  return(
    <div className="tweet-editor">
      
       <img src="src/images/profile-photo.png" 
         className="avatar" alt="avatar"/>
      
        <div className="tweet-editor-form">
          <input className="tweet-editor-input"
            placeholder="what's happening?" /> 
          
          <div className="tweet-editor-buttons">
            
             <div className="tweet-editor-actions">
               <img src="src/icons/Vector.png"  />
               <img src="src/icons/Gif.png"  />
               <img src="src/icons/Poll.png"  />
               <img src="src/icons/Group.png"  />
               <img src="src/icons/Schedule.png"  /> 
             </div>
            
            <button className="button">Tweet</button>
            
         </div>
        </div>
      
    </div>
  )
}
export default TweetEditor;