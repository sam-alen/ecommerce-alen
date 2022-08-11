import React from 'react'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className="hero min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
        <h1 className="text-5xl font-bold">Check our New Collection!</h1>
        <p className="py-6">Check this new collection in collaboration with Carolina Herrera.</p>
        <Link to={`/new-releases`}>
          <button className="btn btn-primary">Check it!</button>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default Hero
