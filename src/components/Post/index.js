import {useState} from 'react';
import './style.css';
import USERIMAGE from '../../assets/userImage.jpg';
import EMOJI1 from '../../assets/emoji1.gif'
import EMOJI2 from '../../assets/emoji2.gif'
import EMOJI3 from '../../assets/emoji3.gif'
import EMOJI4 from '../../assets/emoji4.gif'

export default function Post(props){
    
    const [comment, setComment] =useState(
        [
            {id:0,
            message:[]},
            {id:1,
            message:[]},
        ]
    )
    const [newComment, setNewComment]= useState([])
    function addComment(){
        console.log("This completed ",newComment[0])
        comment.map((v,i)=>{
            if(v.id == newComment[0]){
                setComment(comment.message =[newComment[1]])
            }
            else{
                const newObj ={
                    id: newComment[0],
                    message: [newComment[1]]
                }
                setComment([...comment, newObj])
            }
        })
        
    }
    // console.log("THIS IS PROPS ==>",props.payload )
    return(<div className="Container">
        {props.payload.map((v,i)=>{
            let {id, time, postDetails, postURL} = v
            return(
                <div key={i} className="Page">
          <div className="postProfile">
          <img className="profileImg" width="50px" height="50px" src={USERIMAGE} alt="User Image" />
          <div className="profileName">Tehseen Jawed <div className="timer">{time}</div> </div>
          <div className="profileIcons">
          <i class="fas fa-bell fa-lg"></i>
          <i class="far fa-id-badge fa-lg"></i>
          </div>
          </div>
          <div className="postDetails">{postDetails}</div>
          <img className="postImage" src="http://1.bp.blogspot.com/-Ctv1m-63Q7Q/TozUCb70gQI/AAAAAAAAAfw/UQk-nUN3NHM/s1600/beautiful+nature+scenery-1.jpg" alt="PostImage" />
          <div className="emojiPack">
             <div className="emojiImage">  <img width="50px" src={EMOJI3} alt="Emoji"/></div>
             <div className="emojiImage">  <img width="50px" src={EMOJI2} alt="Emoji"/></div>
             <div className="emojiImage">  <img width="50px" src={EMOJI1} alt="Emoji"/></div>
             <div className="emojiImage">  <img width="50px" src={EMOJI4} alt="Emoji"/></div>
          </div>
          <div className="MessageBox">
          <img className="profileImg" width="50px" height="50px" src={USERIMAGE} alt="User Image" />
           <input className="MessageText" value={newComment[1]} onChange={(e) => setNewComment([id,e.target.value])} type="text" placeholder="Type Your Comment..."/>   
           <button className="MessageButton" onClick={addComment}><i class="fas fa-paper-plane fa-lg"></i></button>
          </div>
          {comment.map((v,i)=> {
              
                if(id == v.id){
                    console.log(v)
                    return(
                        <div key={i} className="commentBox">
                        <div className="Comment">
                        <div className="postProfile ">
                    <img className="profileImg commentProfileImage" width="40px" height="40px" src={USERIMAGE} alt="User Image" />
                    <div className="profileName">Tehseen Jawed </div>
                    <div className="postDetails CommentText">{v.message}</div>
                    </div>
                        </div>
                    </div>
                    )
                    }
          })}
          
        </div>
            )
        })}
    </div>)
}