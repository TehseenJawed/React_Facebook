import {useState} from 'react';
import POST from './components/Post';
import USERIMAGE from './assets/userImage.jpg'
import './App.css'


function App() {
  var count = 0;
  var obj=[]
  function Header(){
    return(<div>
      <div className="header">
     <div className="logo">MTEHSEEN.COM</div>
        <div className="iconBox">
          <div className="icon1">
          <i class="fas fa-home fa-lg"></i>
          </div>
          <div className="icon2">
          <i class="fas fa-video fa-lg"></i>
          </div>
          <div className="icon3">
          <i class="fas fa-users fa-lg"></i>
          </div>
          <div className="icon4">
          <i class="fab fa-xbox fa-lg"></i>
          </div>
        </div>

        <div className="userProfile">
          <img className="userImg" width="30px" height="30px" src={USERIMAGE} alt="User Image" />
          <div className="userName">Tehseen Jawed</div>
        </div>

        <div className="setIconBody">
          <i class="fas fa-plus setIcons"></i>
          <i class="fas fa-inbox setIcons"></i>
          <i class="fas fa-bell-slash setIcons"></i>
          <i class="fas fa-users fa-lg setIcons"></i>
        </div>
        {/* <form action="https://www.mtehseen.com/"> */}
        <button type="submit"  className="profile"><a href="https://www.mtehseen.com/">Developer Profile</a></button>
        {/* </form> */}
      </div>
    </div>)
  }
  
  function UploadPage(){
    var [postDetails, setPostDetails] = useState("");
    var [postURL, setPostURL] = useState("");

    function sendPost(){
      let minutes = new Date().getMinutes()
      let hours = new Date().getHours()
      let date = minutes+" m "+hours+" h"
      var setObj = {id : count,
        time : date,
        postDetails,
        postURL}
      obj.push(setObj);
      count = count+1;
      setPostDetails("");
      setPostURL("")
    }

    return(
    <>
    <div className="mainBody">

      <div className="uploadBodyPage">
      <img className="userImg setuserPostImage" width="50px" height="50px" src={USERIMAGE} alt="User Image" />
      <textarea className="uploadBodytextArea"  value={postDetails} rows="4" onChange={(e) => setPostDetails(e.target.value)}  placeholder="Type Your Post Details " rows="1" cols="50"></textarea>
      <input className="uploadLink" type="text" value={postURL} onChange={(e) => setPostURL(e.target.value)}  placeholder="Image URL" />
      <div className="pageProperty">
        <div className="subProperty">
        <i class="fas fa-video fa-2x"></i>
          <span>Live Video</span>
        </div>
        <div className="subProperty">
        <i class="far fa-images fa-2x"></i>
          <span>Photo Video</span>

        </div>
        <div className="subProperty">
        <i class="far fa-surprise fa-2x"></i>
          <span>Feeling</span>

        </div>
      </div>
      <button className="pageButton" onClick={sendPost}>Post</button>
      </div>
    
    </div>
    <POST payload={obj} />
    </>)
  }
  
  return (
    <div className="backContainer">
      <Header />
      <UploadPage/>
      
    </div>
  );
}

export default App;
