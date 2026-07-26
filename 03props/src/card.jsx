function Card(props){
    return(
        <>
        <div className="bg-zinc-800 p-5 rounded-xl">
            <img 
            src={props.img}
            className="w-24 h-24 rounded-full object-cover mx-auto"/>
            <h2>{props.name}</h2>
            
            <p>{props.profession}</p>
        
        </div>
        
        </>
    )
}
export default Card