import React from 'react'

function DebitCard() {
  return <div className='cardGroup'>
      <img src="./pictures/visalogo.jpg" alt="" className='card_logo' />

      <img src="./pictures/visacard.jpg" alt="" className='card_chip' />

      <div className='card_number'>1234 567 8910 3476 </div>
      <div className='card_name'> Rohini Chaudhari</div>
     <div className='card_from'>6/21</div>
     <div className='card_to'>6/25</div>
     <div className='card_ring'></div>
     
       </div>
  
}

export default DebitCard
