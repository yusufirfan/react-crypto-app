import React from 'react'
import '../index.css'

const Main = ({ coins }) => {

  return (
    <div className='coin-container'>
      
        {
          coins.map((coin) => {

            return (
              <>
              <div className='coin-row'>
                <div className='coin'>
                  <img src={coin.image} alt="" />
                  <h1>{coin.name}</h1>
                </div>
                <div className='coin-data'>
                  <p className='coin-price'>
                    {(coin.current_price/100).toFixed(2)}
                  </p>
                  <p className="coin-percent red">
                    {(coin.high_24h/100).toFixed(2)}
                  </p>
                  <p className="coin-percent green">
                    {(coin.low_24h/100).toFixed(2)}
                  </p>
                  <p className="coin-marketcap">
                    Mkt Cap: {(coin.market_cap/100).toFixed(2)}
                  </p>
                </div>
                </div>
              </>
            )

          })
        }
    </div>
  )
}

export default Main