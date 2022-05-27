import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(12, "Qual bicho transmite a doença de chagas?", [
    RespostaModel.errada("Abelha"),
    RespostaModel.errada("Tatu"),
    RespostaModel.errada("Pulgas"),
    RespostaModel.certa("Barbeiro"),
  ]),
  new QuestaoModel(
    48,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      RespostaModel.errada("Caju"),
      RespostaModel.errada("Coco"),
      RespostaModel.certa("Abobora"),
      RespostaModel.errada("Chuchu"),
    ]
  ),
  new QuestaoModel(51, "Qual é o coletivo de cães?", [
    RespostaModel.errada("Manada"),
    RespostaModel.certa("Matilha"),
    RespostaModel.errada("Alcateia"),
    RespostaModel.errada("Rebanho"),
  ]),
  new QuestaoModel(
    102,
    "Qual é o triângulo que tem todos os lados diferentes?",
    [
      RespostaModel.errada("Escaleno"),
      RespostaModel.errada("Equilátero"),
      RespostaModel.errada("Isóceles"),
      RespostaModel.certa("Trapézio"),
    ]
  ),
];

export default questoes