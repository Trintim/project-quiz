
import { useState } from 'react';
import Questionario from '../components/Questionario';
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

  function questaoRespondida(questao: QuestaoModel){

  }

  function irPraProximoPasso() {}

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Questionario
        questao={questao}
        ultimaPergunta={false}
        questaoRespondida={questaoRespondida}
        irPraProximoPasso={irPraProximoPasso}
      />
    </div>
  );
}
