import questoes from "../bancoDeQuestoes";'../bancoDeQuestoes'

export default function handler(req, res) {
  const idSelecionado = +req.query.id

  const unicaQuestaoOuNada = questoes.filter(questao =>questao.id === idSelecionado)

  if(unicaQuestaoOuNada.length === 1){
    const questSelecionada = unicaQuestaoOuNada[0].embaralharResposta();

    res.status(200).json(questSelecionada.converterParaObjeto())
  }else{
    res.status(204).send()
  }

}
