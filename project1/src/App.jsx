import Navbar from "./Navbar";
import Student from "./student";
function App(){
    return(
        
        <div>
            <Navbar/>
            <h1>Hello  React </h1>
            <Student 
            name="neha"
            age={20}
            city="ahemedabad"
            />
            <Student 
            name="narmada"
            age={20}
            city="ahemedabad"
            />
            <Student 
            name="nehuuu"
            age={20}
            city="ahemedabad"
            />
            
            
        </div>
        
    );
}
export default App;
