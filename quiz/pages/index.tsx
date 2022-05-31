
import { useEffect, useState } from 'react';
import Questionario from '../components/Questionario';
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'
import questionario from './api/questionario/index';

const questaoMock = new QuestaoModel(1, "Qual é a melhor cor?", [
  RespostaModel.errada("verde"),
  RespostaModel.certa("Azul"),
  RespostaModel.errada("Preta"),
  RespostaModel.errada("Vermelha"),
]);

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = useState<number[]>([])
  const [questao, setQuestao] = useState<QuestaoModel>(questaoMock)

  async function carregarIdsDasQuestoes(){

    const resp = await fetch(`${BASE_URL}/questionario`)
    const idsDasQuestoes = await resp.json()
    console.log(idsDasQuestoes);
    setIdsDasQuestoes(idsDasQuestoes)
  }

  async function carregarQuestao(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao)
  }

  useEffect(()=> {
    carregarIdsDasQuestoes();
  }, [])

  useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestao(idsDasQuestoes[0]);
  }, [idsDasQuestoes]);

  function questaoRespondida(questaoRespondida: QuestaoModel){
    setQuestao(questaoRespondida)
  }

  function irPraProximoPasso() {}

  return (
    <Questionario
      questao={questao}
      ultimaPergunta={false}
      questaoRespondida={questaoRespondida}
      irPraProximoPasso={irPraProximoPasso}
    />
  );
}
