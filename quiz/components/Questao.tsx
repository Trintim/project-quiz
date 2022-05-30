import QuestaoModel from "../model/questao";
import styles from "../styles/Questao.module.css"
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";

const letras = [
  { valor: "A", cor: "#0162ea" },
  { valor: "B", cor: "#ab00a0" },
  { valor: "C", cor: "#8da600" },
  { valor: "D", cor: "#28645c" },
];
interface QuestaoProps{
    valor: QuestaoModel
    respostaFornecida: (indice: number) => void
}

export default function Questao(props: QuestaoProps){
    const questao = props.valor

    function renderizarRespostas(){
        return questao.respostas.map((resposta, i) =>{
            return (
              <Resposta
                key={i}
                valor={resposta}
                indice={i}
                letra={letras[i].valor}
                corFundoLetra={letras[i].cor}
                respostaFornecida={props.respostaFornecida}
              />
            );
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado}/>
            {renderizarRespostas()}
        </div>
    )
}