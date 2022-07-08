import {useParams} from 'react-router-dom';
import {getFetch} from '../../helpers/getFetch';
import {useState, useEffect} from 'react';


const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        getFetch
        .then(resp => setProducts(resp.filter(products => products.id === Number(id))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [id])

      

    return (
        <div>
            { loading ? 
                <h2> Cargando...</h2>
            :
                <div className='ml-[450px]'>
                   <div className="artboard artboard-horizontal phone-6">
                        <img src={products[0].image} alt="" />
                   </div>

                   <div class="indicator ml-10" >
                    <div class="indicator-item ">
                        <button class="btn btn-primary">Buy</button>
                    </div> 
                    <div class="card border">
                        <div class="card-body">
                        <h2 class="card-title">{products[0].name}</h2> 
                        <p>{products[0].desc}</p>
                        </div>
                    </div>
                    </div>
                </div>

        }
        </div>
    )
}

export default ItemDetailContainer;