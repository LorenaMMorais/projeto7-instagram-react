function Post(props){
    const{src, user, conteudo, imgCurtida, nomeCurtida, qntCurtida} = props
    return(
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={src} alt={src}/>
                    {user}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={conteudo} alt={conteudo}/>
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={imgCurtida} alt={imgCurtida}/>
                    <div class="texto">
                        Curtido por <strong>{nomeCurtida}</strong> e <strong>outras {qntCurtida} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts(){
    const posts = [
        { src:"assets/img/meowed.svg", user:"meowed", conteudo:"assets/img/gato-telefone.svg", imgCurtida:"assets/img/respondeai.svg", nomeCurtida:"respondeai", qtdCurtida:"101.523" },
        { src:"assets/img/barked.svg", user:"barked", conteudo:"assets/img/dog.svg", imgCurtida:"assets/img/adorable_animals.svg", nomeCurtida:"adorable_animals", qtdCurtida:"99.159" }
    ]
    return(
        <div class="posts">
            {posts.map(dados => 
                <Post src={dados.src} user={dados.user} conteudo={dados.conteudo} imgCurtida={dados.imgCurtida} nomeCurtida={dados.nomeCurtida} qntCurtida={dados.qtdCurtida}/> 
            )}
        </div>
    )
}