import Link from 'next/link'

import styles from './Style.module.css'

const Whatsapp = () => {
  return (
    <div className={styles.container}>
      <Link href='https://wa.me/+51991303509?text=Hola,%20deseo%20realizar%20una%20consulta...' target='_blank'>
        <img
        className={styles.boton}
        src='icono.png'
        alt='jesac-whatsapp'/>
      </Link>
    </div>
  )
}

export default Whatsapp