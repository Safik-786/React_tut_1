import ReactDOM from 'react-dom/client';


function Car(props){
    return(
        <>
            <h2>i am a car and my brand is {props.brand}</h2>
        </>
    )
}

function Garage(){
    return(
        <>
            <h1>hii there my selg saffix and this is my </h1>
            <car brand="Defender"/>
        </>
    )
}
const roots = ReactDOM.createRoot(document.querySelector('#roots'))
roots.render(
<Garage/>
)
