import React, { useEffect, useState } from 'react'
import Main from './Main'
import axios from 'axios'

const Coin = () => {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState("")

  const getCoins = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR')
    .then(res=>setCoins(res?.data))
    .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    getCoins()
  }, [])

  const filteredCoins= coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='coin-app'>
      <div className='coin-search'>
     <form action="">
       <input type="text" className='coin-input' placeholder='Provide the coin name' onChange={e=>handleChange(e)}/>
     </form>
      </div>
          <Main coins={filteredCoins}/>
    </div>
  )
}

export default Coin;