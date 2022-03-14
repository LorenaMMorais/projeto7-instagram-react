export default function Story(props){
    const {src, user} = props
    return(
        <div className="story">
            <div className="imagem">
                <img src={src} alt={user}/>
            </div>
            <div className="usuario">
                {user}
            </div>
        </div>
    )
}
