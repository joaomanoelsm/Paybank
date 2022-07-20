import React from 'react'

const Receive = () => {
  return (
    <main id='receive'>
        <section id='demand'>
            <label className='label' htmlFor="">Enter the amount to be charged</label>
            <input className='input' type="number" name="" id="" />
        </section>
        <section id='search'>
            <label className='label' htmlFor="">Who do you want to charge R$ 1600</label>
            <input className='input' placeholder='Look for contact' type="text" name="" id="" />
        </section>
        <section></section>
    </main>
  )
}

export default Receive