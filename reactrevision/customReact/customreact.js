
//yeh humara custom element h we want ki jo app.jsx mei likha ho wo aise h render ho

function customRender(reactElement,container) //kya banana h aur kaha banana h
{
    //const domElement=document.createElement(reactElement.type) //'a' is the type
   // domElement.innerHTML=reactElement.children//'click to visit google'
    //domElement.setAttribute('href',reactElement.props.href)//<a href="https://google.com">
   // domElement.setAttribute('target',reactElement.props.target)//<a href="https://google.com" target="_blank">
   // container.appendChild(domElement)// <div id="root"></div>

   //using the loop we are gonna to find it
   const domElement=document.createElement(reactElement.type)
   domElement.innerHTML=reactElement.children
   for(const prop in reactElement.props)
   {
    if(prop ==='children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
   }
   container.appendChild(domElement)

}

//reactelement 
//createlement
//set props + children
//appendchild()
const reactElement ={
    type:'a',
    props :{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click to visit google'

}


const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)
