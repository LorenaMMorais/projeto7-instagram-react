export default function Usuario(props){
    return(
        <div class="usuario">
            <img src={props.src} alt={props.src}/>
            <div class="texto">
                <strong>{props.nick}</strong>
                {props.nome}
            </div>
        </div>
    )
}