import { useState } from "react";
import "./style.css";
import USERIMAGE from "../../assets/userImage.jpg";
import EMOJI1 from "../../assets/emoji1.gif";
import EMOJI2 from "../../assets/emoji2.gif";
import EMOJI3 from "../../assets/emoji3.gif";
import EMOJI4 from "../../assets/emoji4.gif";

export default function Post(props) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState([]);
  const [emojis, setEmojis] = useState([]);
  
  function addEmoji(newEmoji, id){
    if(emojis === undefined || emojis.length == 0){
      const emojiObj = [{
        id,
        emoji:newEmoji
      }]
      setEmojis(emojiObj)
    }
    else{
      emojis.map((v,i)=>{
        if(v.id == id){
          const emojiObj =[...emojis];
          emojiObj[v.id].emoji = newEmoji
          setEmojis(emojiObj)
        }
        else{
          const emojiObj =[...emojis]
          const newEmojiObj = {
            id,
            emoji:newEmoji
          }
          emojiObj.push(newEmojiObj)
          setEmojis(emojiObj)
        }
      })
    }
  }
  function addComment() {
    if (comments === undefined || comments.length == 0) {
      const newObj1 = {
        id: newComment[0],
        message: [newComment[1]],
      };
      setComments([newObj1]);
    } else {
      comments.map((v, i) => {
        if (v.id === newComment[0]) {
          let updatedComments = [...comments];
          updatedComments[v.id].message.push(newComment[1]);

          setComments(updatedComments);
        } else {
          const newObj = {
            id: newComment[0],
            message: [newComment[1]],
          };
          setComments([...comments, newObj]);
        }
      });
    }
  }
  return (
    <div className='Container'>
      {props.payload.map((v, i) => {
        let { id, time, postDetails, postURL } = v;
        return (
          <div key={i} className='Page'>
            <div className='postProfile'>
              <img
                className='profileImg'
                width='50px'
                height='50px'
                src={USERIMAGE}
                alt='User Image'
              />
              <div className='profileName'>
                Tehseen Jawed <div className='timer'>{time}
                
                {emojis.map((v,i)=>{
                  if(v.id == id){
                    return(
                      <div className='emojiResponse'>
              <div
                className='setEmojiImage'
              >
                {" "}
                <div>........Resonse</div>
                <img width='30px' src={v.emoji} alt='Emoji' />
              </div>
            </div>
                    )
                  }
                })}
                
                </div>{" "}
              </div>
              
              <div className='profileIcons'>
                <i class='fas fa-bell fa-lg'></i>
                <i class='far fa-id-badge fa-lg'></i>
              </div>
            </div>
            
         

            <div className='postDetails'>{postDetails}</div>
            <img className='postImage' src={postURL} alt='PostImage' />
            <div className='emojiPack'>
              <div
                className='emojiImage'
                onClick={() => addEmoji(EMOJI3, id)}
              >
                
                <img width='50px' src={EMOJI3} alt='Emoji' />
              </div>
              <div
                className='emojiImage'
                onClick={() => addEmoji(EMOJI2, id)}
              >
                
                <img width='50px' src={EMOJI2} alt='Emoji' />
              </div>
              <div
                className='emojiImage'
                onClick={() => addEmoji(EMOJI1, id)}
              >
                
                <img width='50px' src={EMOJI1} alt='Emoji' />
              </div>
              <div
                className='emojiImage'
                onClick={() => addEmoji(EMOJI4, id)}
              >
                
                {/* <img width='50px' src={EMOJI4} alt='Emoji' /> */}
              </div>
            </div>

           

            <div className='MessageBox'>
              <img
                className='profileImg'
                width='50px'
                height='50px'
                src={USERIMAGE}
                alt='User Image'
              />
              <input
                className='MessageText'
                value={newComment[1]}
                onChange={(e) => setNewComment([id, e.target.value])}
                type='text'
                placeholder='Type Your Comment...'
              />
              <button className='MessageButton' onClick={() => addComment(0)}>
                <i class='fas fa-paper-plane fa-lg'></i>
              </button>
            </div>
            {comments.map((v, i) => {
              if (id == v.id) {

                return (
                  <div>
                    {v.message.map((value, index) => {
                      return (
                        <div key={index} className='commentBox'>
                          <div className='Comment'>
                            <div className='postProfile '>
                              <img
                                className='profileImg commentProfileImage'
                                width='40px'
                                height='40px'
                                src={USERIMAGE}
                                alt='User Image'
                              />
                              <div className='profileName'>Tehseen Jawed </div>
                              <div className='postDetails CommentText'>
                                {value}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
}
