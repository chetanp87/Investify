import React from 'react'

const Hero = () => {
  return (
    <div className="container">
        <div className="row text-center">
            <img className='px-50 py-5' src="/src/images/landing.png" alt="Landing image"  />
            <h1 className='text-5xl text-gray-700'>Invest in everything</h1>
            <p className='mt-5 text-xl'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='bg-blue-400 mt-8 px-3 py-2 rounded-sm font-bold text-white'>Sign up for free</button>
        </div>
    </div>
  )
}

export default Hero