import {useState} from "react"
export default function CurrentPatient({ currentPatient,handleNext,handleComplete }) {
  return (
    <>
      <h2>Now Serving</h2>

      {currentPatient ? (
        <div>
          <p>Token: {currentPatient.id}</p>
          <p>Name: {currentPatient.name}</p>
          <p>Service: {currentPatient.service}</p>
        </div>
      ) : (
        <p>No patient is currently being served.</p>
      )}
      <button type="button" onClick={handleNext}>Call Next</button>
      {currentPatient && (<button type="button" onClick={handleComplete}>Complete</button>)}
    </>
  );
}