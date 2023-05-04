import React from 'react'
import { useState } from 'react'
const Project = ({id,img,title,text,language,handleClick}) => {
    const [readMore,seReadMore] = useState(false)
 
  return (
    <div className='single-project' key={id}>
<div className='img-container'>
    <img src={img} alt={text}></img>
    <div className='modal-img'>
        <div className='modal-content'><button>Live Site</button>
        <button>Source Code</button></div>
    </div>
</div>
<div className='project-info'>
    <h3>{title}</h3>
    <p>{readMore?text:`${text.substring(0,100)}...`}<span className='btns' onClick={()=>{seReadMore(!readMore)}}>{readMore?" Show Less":"Read More"}</span></p> 
    <div className='language'> 
    {language.map((item,index)=>{ 
    return <span key={index}>{item}</span>
})} </div> 
    <div className='btn-container'>
<button type='button'>Read More</button>
<span onClick={()=>{handleClick(id)}}>Not interested</span>
    </div>
    </div>
</div>
  )
}

export default Project