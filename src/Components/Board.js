import React from "react";
import './Board.css'


const Board = ({ job,handleTagClick }) => {


    const tags = [job.role, job.level]
    if (job.languages) {
        tags.push(...job.languages)                      //deconstructing and adding the array elements
    }
    if (job.tools) {
        tags.push(...job.tools)
    }


    return (
        
        <div className={`main flex  flex-col sm:flex-row  ${job.featured && 'border-l-4 border-teal-500 border-solid'}`} >          
            
            <div class='logo_info'>
                <div className="logo">
                    <img  className="-mt-14 w-20 h-20 sm:mt-0" src={job.logo} alt="" />        
                </div>
                <div className="info">
                    <div className="company"> {job.company}
                        {job.new && (<span className="new"> NEW!</span>)}                
                        {job.featured && (<span className="featured"> FEATURED</span>)}
                    </div>
                    <div className="position">{job.position}</div>
                    <div className="location">{job.postedAt}  ·  {job.contract}  ·  {job.location}</div>
                </div>
            </div>
            <div className="btn flex flex-wrap border-t border-gray-500 border-solid sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0 ">
                {tags ? (tags.map((val) => <span onClick={(()=>handleTagClick(val))} className="btn_design">{val}</span>)) : ''}
            
            </div>
        </div>
    )
}


export default Board;