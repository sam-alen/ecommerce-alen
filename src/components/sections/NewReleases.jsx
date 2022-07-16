import {useState, useEffect} from 'react'
import { getFetch } from '../../helpers/getFetch'
import {Link} from 'react-router-dom'


function NewReleases() {

  const [products, setProducts] = useState([])
  

  useEffect(() => {
    getFetch
      .then(resp => setProducts(resp))
      .catch(err => console.log(err))
  }, [])

  console.log(products);

  return (
    <div className='flex justify-center px-10 pt-10'>
      {products.filter(product => product.category === 'new-deals').map(product => ( 
        <div key={product.id} className="card-compact w-96 shadow-xl m-auto p-auto card-side card-compact">
        <figure className="px-10 pt-10">
          <img src={product.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center m-auto">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.desc}</p>
          <div className="card-actions">
            <Link to={`/details/${product.id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default NewReleases