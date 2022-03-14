import Post from "./Post";

export default function Posts(){
    const posts = [
        { src:"assets/img/meowed.svg", user:"meowed", conteudo:"assets/img/gato-telefone.svg", imgCurtida:"assets/img/respondeai.svg", nomeCurtida:"respondeai", qtdCurtida:"101.523" },
        { src:"assets/img/barked.svg", user:"barked", conteudo:"assets/img/dog.svg", imgCurtida:"assets/img/adorable_animals.svg", nomeCurtida:"adorable_animals", qtdCurtida:"99.159" }
    ]
    return(
        <div className="posts">
            {posts.map(dados => 
                <Post key={dados.user} src={dados.src} user={dados.user} conteudo={dados.conteudo} imgCurtida={dados.imgCurtida} nomeCurtida={dados.nomeCurtida} qntCurtida={dados.qtdCurtida}/> 
            )}
        </div>
    )
}