'use client'

import axios from 'axios'

import Image from 'next/image'
import styles from './page.module.css'

import imgChica from '../../public/001.png'
import imgMediana from '../../public/002.png'
import imgGrande from '../../public/003.png'
import imgChamoyada from '../../public/chamoyada.png'
import imgViborita from '../../public/viborita.png'

export default function Home() {
  const _doThis = id => {
    axios.post('/api/click')
      .then(response => setClickCount(response.data.count))
      .catch(error => console.error('Error updating click count', error));
  }

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div onClick={() => _doThis('c')} className={styles.product}>
          <Image
            className={styles.logo}
            src={imgChica}
            alt="squirtle"
            priority
          />
          <h6> Nieve.Chica </h6>
        </div>
        <div onClick={() => _doThis('m')} className={styles.product}>
          <Image
            className={styles.logo}
            src={imgMediana}
            alt="wartortle"
            priority
          />
          <h6> Nieve.Mediana </h6>
        </div>
        <div onClick={() => _doThis('g')} className={styles.product}>
          <Image
            className={styles.logo}
            src={imgGrande}
            alt="blastoise"
            priority
          />
          <h6> Nieve.Grande </h6>
        </div>
        <div onClick={() => _doThis('ch')} className={styles.product}>
          <Image
            className={styles.logo}
            src={imgChamoyada}
            alt="blastoise"
            priority
          />
          <h6> Chamoyada </h6>
        </div>
        <div onClick={() => _doThis('v')} className={styles.product}>
          <Image
            className={styles.logo}
            src={imgViborita}
            alt="blastoise"
            priority
          />
          <h6> Viboritas </h6>
        </div>
      </div>
    </main>
  )
}
