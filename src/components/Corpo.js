import Conteudo from './Conteudo';
import Sidebar from './Sidebar';

export default function Corpo(){
    return(
        <div className="corpo">
            <Conteudo />
            <Sidebar />
        </div>
    )
}