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
            // {}
            
        ]
    )
    const [newComment, setNewComment]= useState([])
    function addComment(emoJi, Id){
      if(emoJi != 0){
        if(comment === undefined || comment.length == 0){
            const newObj1 ={
                id: Id,
                emoji:true,
                emojiURL:emoJi
            }
            setComment([ newObj1])
        }

      }
      else{
        if(comment === undefined || comment.length == 0){
            const newObj1 ={
                id: newComment[0],
                message: [newComment[1]],
                emoji:false
            }
            setComment([ newObj1])
        }
        else{
            comment.map((v,i)=>{
                if(v.id === newComment[0]){
                    // var Obj3 = {id:newComment[0] ,message:[...comment[newComment[0]].message, newComment[1]]}
                    // setComment(comment[v.id].message.push(newComment[1]) )
                }
                else{
                    const newObj ={
                        id: newComment[0],
                        message: [newComment[1]],
                        emoji:false
                    }
                    console.log("I am working in else ==>", newObj)
                    setComment([...comment , newObj])
                }
            }
        )
        }
    }
}
    console.log(comment)
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
          <img className="postImage" src={postURL} alt="PostImage" />
          <div className="emojiPack">
             <div className="emojiImage" onClick={() => addComment(EMOJI3, id)}>  <img width="50px" src={EMOJI3} alt="Emoji"/></div>
             <div className="emojiImage" onClick={() => addComment(EMOJI2, id)}>  <img width="50px" src={EMOJI2} alt="Emoji"/></div>
             <div className="emojiImage" onClick={() => addComment(EMOJI1, id)}>  <img width="50px" src={EMOJI1} alt="Emoji"/></div>
             <div className="emojiImage" onClick={() => addComment(EMOJI4, id)}>  <img width="50px" src={EMOJI4} alt="Emoji"/></div>
          </div>
          <div className="MessageBox">
          <img className="profileImg" width="50px" height="50px" src={USERIMAGE} alt="User Image" />
           <input className="MessageText" value={newComment[1]} onChange={(e) => setNewComment([id,e.target.value])} type="text" placeholder="Type Your Comment..."/>   
           <button className="MessageButton" onClick={() => addComment(0)}><i class="fas fa-paper-plane fa-lg"></i></button>
          </div>
          {comment.map((v,i)=> {
              if(v.emoji===true){
                return(
                    <div key={i} className="commentBox">
                    <div className="Comment">
                    <div className="postProfile ">
                <img className="profileImg commentProfileImage" width="40px" height="40px" src={USERIMAGE} alt="User Image" />
                <div className="profileName">Tehseen Jawed </div>
                <div className="emojiImage commentEmoji">  <img width="50px" src={v.emojiURL} alt="Emoji"/></div>
                </div>
                    </div>
                </div>
                )
              }
              else{
                if(id == v.id){
                    
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
                    }}
          })}
          
          
        </div>
            )
        })}
    </div>)
}