import Image from 'next/image' 

import styles from './saleCard.module.css'
import Button from '@/components/forms/button/button'

export default function SaleCard({image, discount, fullPrice, discountPrice, onAdd}){
    return(
      <div className={styles.salecard}>
            <Image src={`/products/${image}`} alt={`Produto ${image}`} width={250} height={300} />
            <div className={styles.info}>
            <h3 className={styles.title}>Oferta Exclusiva</h3>
            <div className={styles.pricecard}>
            <div className={styles.percent}>-{discount}</div>
            <div className={styles.price}>
            <p className={styles.fullprice}>R${fullPrice}</p>
            <h4 className={styles.discountprices}>R${discountPrice}</h4>
        </div>
            </div>
            <Button fullWidth onClick={onAdd}>
                Adicionar ao carrinho
            </Button>
                </div>        
        </div>   
    )
}

SaleCard.defaultProps = {
    image:'dead-space',
    discount: '90%',
    fullPrice: '119,90',
    discountPrice: '11,99'
}