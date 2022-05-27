
import Questao from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/resposta'


export default function Home() {
  const questaoTeste = new QuestaoModel(1, "Melhor cor?", [
    RespostaModel.errada("verde"),
    RespostaModel.certa("Azul"),
    RespostaModel.errada("Preta"),
    RespostaModel.errada("Vermelha"),
  ]);
  return <Questao valor={questaoTeste} />;
}
