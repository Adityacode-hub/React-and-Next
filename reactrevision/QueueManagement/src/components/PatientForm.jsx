import {useState} from "react";
export default function PatientForm({onAddPatient}){
      const [patientName, setPatientName] = useState("");
      const [serviceName, setServiceName] = useState("");
      const[error,setError]=useState("");
const handleSubmit = (e) => {
    e.preventDefault();
if(patientName.trim()===""||serviceName.trim()==="")

{
 setError("Please fill all fields");
  return;
}
    onAddPatient({
        name: patientName,
        service: serviceName,
      
});

    // Clear inputs
    setPatientName("");
    setServiceName("");
    setError("");
  };
  return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        placeholder="Name"
        value={patientName}
        onChange={(e)=>setPatientName(e.target.value)}
       />
        <input 
            type="text"
            placeholder="Service"
            value={serviceName}
            onChange={(e)=>setServiceName(e.target.value)}
        />
     {error &&<p>{error}</p>}
     <button type="submit">Add Patient</button>
    </form>
  )
}
