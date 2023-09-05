import "./Herostyle.css";
function Hero(props){
    return(
        <>
        <div className={props.cName}>
            <img alt="HerpImg" src={props.heroImg}/>
        <div className="hero-text">
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
            <div>
            {/* <a href={props.url} className={props.btnclass}>
                {props.buttonText}
            </a> */}
            </div>

        </div>
        
        </div>
        </>
    );
}
export default Hero;