import Image from 'next/image'

import styles from './gameCard.module.css'

import Button from '@/components/forms/button/button'

export default function GameCard({ idName, image, fullPrice, category, onAdd }){
    return(
       
       <div className={styles.gamecard}>
            <Image className={styles.image} src={`/products/${image}`} alt={`Produto ${image}`} width={300} height={145} />
            <div className={styles.info}>
                <h3 className={styles.title}>{idName}</h3>
                <p className={styles.category}>{category}</p>
                <div className={styles.pricing}>
                <h2 className={styles.price}>R${fullPrice}</h2> 
                <Button onClick={onAdd}>Adicionar ao carrinho</Button>
                </div>
                </div>
        </div>
    )
}