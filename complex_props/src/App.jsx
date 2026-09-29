import jobs from "./data/jobs";
import JobCard from "./components/JobCard";
import "./App.css";

function App() {
  
  return (
    <div className="container">
      
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default App;
