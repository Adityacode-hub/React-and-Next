// eslint-disable-next-line no-unused-vars
import jobs from "../data/jobs";

function JobCard({job}){
    console.log(job);
    return(
        
        <div className='container'>
        <div className='header'>
            <h2>{job.company}</h2>
            
        </div>
        <div className='role'>
            <span>{job.role}</span>
            <span>{job.type}</span>
        </div>
          <div className='locate'>
            <p>{job.location}</p>
          </div>

        <div className='button'>
            <button onClick={()=>alert(job.company)}>Apply</button>
        </div>
        
        </div>
    
    )
}
export default JobCard;