import styles from '../styles/Estatisticas.module.css'

interface EstatisticaProps{
    valor: any
    text: string
    corFundo?: string
    corFonte?: string
}

export default function Estatistica(props: EstatisticaProps){
    return (
        <div className={styles.estatistica}>
            <div className={styles.valor} style={{
                backgroundColor: props.corFundo ?? '#197cd4',
                color: props.corFonte ?? '#333'
            }}>
                {props.valor}
            </div>
            <div className={styles.texto}>
                {props.text}
            </div>
        </div>
    )
}