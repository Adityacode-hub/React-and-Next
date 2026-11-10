import React from 'react'
export const metadata={
  title: "Combined metadata ",
  description: "This is the combined metadata of the page",
};

const Dahboardlayout = ({children}) => {
  return (
    <div>
        <h1>Dashboardlayout</h1>
        {
            children
        }
    </div>
  )
}

export default Dahboardlayout