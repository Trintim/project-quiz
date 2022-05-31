import styles from '../styles/Resultado.module.css'
import { useRouter } from "../node_modules/next/router"
import Estatistica from '../components/Estatistica'
import Botao from '../components/Botao'

export default function resultado(){
    const router = useRouter()

    const total = +router.query.total
    const certas = +router.query.certas
    const percentual = Math.round((certas / total) * 100)

    return (
      <div className={styles.resultado}>
        <h1>Resultado Final</h1>
        <div style={{ display: "flex" }}>
          <Estatistica text={"Perguntas"} valor={total} />
          <Estatistica text={"Certas"} valor={certas} corFundo="#9CD2A4" />
          <Estatistica
            text={"Percentual"}
            valor={`${percentual}%`}
            corFundo="#c22d13"
          />
        </div>
        <Botao href='/' texto='Tentar Novamente'/>
      </div>
    );
}