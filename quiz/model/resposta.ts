export default class RespostaModel {
  #valor: string
  #certa: boolean
  #revelada: boolean

  constructor(valor: string, certa: boolean, revelada = false) {
    this.#valor = valor
    this.#revelada = revelada;
    this.#certa = certa;
  }

  static certa(valor: string){
    return new RespostaModel(valor, true)
  }
  static errada(valor: string){
    return new RespostaModel(valor, false);
  }

  get certa() {
    return this.#certa;
  }
  get valor() {
    return this.#valor;
  }
  get revelada() {
    return this.#revelada;
  }

  revelar(){
    return new RespostaModel(this.#valor, this.#certa, true)
  }

  //TODO const resp = new RespostaModel(...)
  //TODO resp.metodoDeInstancia()

  //TODO RespostaModel.metodoStatic()

  static criarUsandoObjeto(obj: RespostaModel): RespostaModel{
    return new RespostaModel(obj.valor, obj.certa, obj.revelada)
  }

  paraObjeto(){
    return {
      valor: this.#valor,
      certa: this.#certa,
      revelada: this.#revelada,
    }
  }
}