import {useState} from 'react'
import Head from 'next/head'



import styles from '@/styles/index.module.css'

import Navbar from '@/components/navbar/navbar'
import Subtitle from '@/components/tipography/subtitle/subtitle'
import Container from '@/components/container/container'
import SaleCard from '@/components/cards/saleCard/saleCard'
import GameCard from '@/components/cards/gameCard/gameCard'
import { BsTypeH3 } from 'react-icons/bs'

export default function Home() {
  const [cart, setCart] = useState([])

  const handleAddProduct = (info) =>{
    setCart([...cart, info])
  }

  const handleRemoveProduct = (pos) => {
    setCart(cart.filter((obj, posObj) => posObj !== pos))
  }

  return (
    <>
      <Head>
        <title>DevSteam: A sua loja online de games</title>
        <meta name="description" content="DevSteam: A sua loja online de games" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar cart={cart} onRemove={handleRemoveProduct}/>
       
       <Container>
       <div className={styles.session}>
        <Subtitle>Promoções</Subtitle>
        <div className={styles.salecontainer}>
        <SaleCard 
        image={'dead-space.jpg'}
        discount='35%'
        fullPrice='200,00'
        discountPrice='130,00'
        onAdd={() =>
        handleAddProduct({name:'dead-space', price: 200.00, image:'dead-space.jpg'})
        }
        />
        <SaleCard 
        image={'dead-space-2.jpg'}
        discount='30%'
        fullPrice='220,00'
        discountPrice='154,00'
        onAdd={() =>
          handleAddProduct({name:'dead-space-2', price: 220.00, image:'dead-space-2.jpg'})
          }
        />
        <SaleCard 
        image={'dead-space-3.jpg'}
        discount='20%'
        fullPrice='280,00'
        discountPrice='232,00'
        onAdd={() =>
          handleAddProduct({name:'dead-space-3', price: 280.00, image:'dead-space-3.jpg'})
          }
        />
        </div>
        </div >

        <div>
        <Subtitle>Outros Jogos</Subtitle>     
        <div className={styles.gamecontainer}>
        <GameCard 
        idName={'TESV Skyrim'}
         image={'tesv.jpg'}
         category='Ação, RPG, Singleplayer'
         fullPrice='99,90'
          onAdd={() =>
            handleAddProduct({name:'TESV Skyrim', price: 99.90, image:'tesv.jpg'})
            }/>
              <GameCard
              idName={'KOF 2013'}
              image={'kof-2013.jpg'}
              category='Arcade, Multiplayer'
              fullPrice='75,90'
          onAdd={() =>
            handleAddProduct({name:'Kof 2013', price: 99.90, image:'kof-2013.jpg'})
            }/> 
             <GameCard 
            idName={'Gears of War'}
            image={'gears-of-war.png'}
         category='Terceira pessoa (TPS), singleplayer,Multiplayer, Coop e Multiplayer Coop'
         fullPrice='160,90'
            onAdd={() =>
              handleAddProduct({name:'Gears of War', price: 160.90, image:'gears-of-war.png'})
              }/>  
              <GameCard 
              idName={'GTA San Andreas'}
              image={'gta-san-andreas.jpg'}
         category='Ação, aventurra, singleplayer e Multiplayer'
         fullPrice='49,90'
              onAdd={() =>
                handleAddProduct({name:'GTA San Andreas', price: 99.90, image:'gta-san-andreas.jpg'})
                }/>
        
        </div>
        </div>
       </Container>
       
      </div>
    </>
  )
}
