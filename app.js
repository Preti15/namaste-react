import  React  from 'react';
import  ReactDOM  from 'react-dom/client';


const Heading = () => ( React.createElement("h1", {id:"heading"}, "hello there from React"));

//jsx is converted by transpilier or compiler which is Babel into create react element (object) and then by render into HTML elements.
const JsxHeading = () => {
return(
<div>
    <Heading />
    <h1 className='heading' >this is hello from Functional Component</h1>
</div>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<JsxHeading />);