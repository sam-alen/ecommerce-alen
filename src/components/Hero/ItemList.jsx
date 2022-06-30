import {useState, useEffect} from 'react'
import { getFetch } from '../../helpers/getFetch'


function Hero() {
  const [products, setProducts] = useState([])
  

  useEffect(() => {
    getFetch
      .then(resp => setProducts(resp))
      .catch(err => console.log(err))
  }, [])

  console.log(products);

  return (
    <div className='flex'>
      {products.map(product => ( 
        <div key={product.id} class="card w-96 bg-base-100 shadow-xl m-auto">
            <figure class="px-10 pt-10">
          <img src={product.image} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center m-auto">
          <h2 class="card-title">{product.name}</h2>
          <p>{product.desc}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Hero