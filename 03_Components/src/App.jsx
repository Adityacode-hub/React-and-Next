import Navbar from './components/Navbar'
import Card from './components/Card'
import Button from './components/Button'
function App(){
  return(
<div className='min-h-screen bg-grey-100'>

<Navbar/>
<div className='flex flex-xol-items-center gap-6 mt-10'>
<Card
title="React Developer"
description="learning to Build the React Components"/>
<Card
title="Tailwind Css"
description="Style Faster with the utility classes"/>
<button text="click me"/>
</div>

</div>
  )
}
export default App;
