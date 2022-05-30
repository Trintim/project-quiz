
import { useState } from 'react';
import Questao from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'

const questaoMock = new QuestaoModel(1, "Qual é a melhor cor?", [
  RespostaModel.errada("verde"),
  RespostaModel.certa("Azul"),
  RespostaModel.errada("Preta"),
  RespostaModel.errada("Vermelha"),
]);


export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)

  function respostaFornecida(indice: number){
    setQuestao(questao.responderCom(indice))
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      height: '100vh',
      alignItems: 'center'
     }}>
      <Questao valor={questao}
              respostaFornecida={respostaFornecida}/>
    </div>
  );
}
