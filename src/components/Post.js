export default function Post(props){
    const{src, user, conteudo, imgCurtida, nomeCurtida, qntCurtida} = props
    return(
        <div className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={src} alt={src}/>
                    {user}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={conteudo} alt={conteudo}/>
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={imgCurtida} alt={imgCurtida}/>
                    <div className="texto">
                        Curtido por <strong>{nomeCurtida}</strong> e <strong>outras {qntCurtida} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}