import React from 'react'
export async function generateMetadata({params})
{
    const {userid}=await params;
return {
  title: {
    default: `User ${userid}`,
    template: "%s | CodeSnippet",
  },
  description: `User profile ${userid}`,
};
}

const UserIdpage = async ({params}) => {
    const {userid}=await params;
  return (
    <div>UserIdpage{userid}</div>
  )
}

export default UserIdpage