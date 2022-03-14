export default function Usuario(props){
    return(
        <div className="usuario">
            <img src={props.src} alt={props.src}/>
            <div className="texto">
                <strong>{props.nick}</strong>
                {props.nome}
            </div>
        </div>
    )
}