function Story(props){
    const {src, user} = props
    return(
        <div class="story">
            <div class="imagem">
                <img src={src} alt={user}/>
            </div>
            <div class="usuario">
                {user}
            </div>
        </div>
    )
}

export default function Stories(){
    const stories= [
        {src:"assets/img/9gag.svg", user:"9gag" },
        {src:"assets/img/meowed.svg", user:"meowed"},
        {src:"assets/img/barked.svg", user:"barked"},
        {src:"assets/img/nathanwpylestrangeplanet.svg", user:"nathanwpylestrangeplanet"},
        {src:"assets/img/wawawicomics.svg", user:"wawawicomics"},
        {src:"assets/img/respondeai.svg", user:"respondeai"},
        {src:"assets/img/filomoderna.svg", user:"filomoderna"},
        {src:"assets/img/memeriagourmet.svg", user:"memeriagourmet"}
    ]
    return(
        <div class="stories">
            {stories.map(dados =>
                <Story src={dados.src} user={dados.user}/>
            )}
        </div>
    )
}