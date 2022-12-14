
import React from 'react'
import { useFetchGifs} from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);
   
  return (
      <>
      <h3 className='animate__animated animate__fadeInDownBig'>{category}</h3>
    {
        loading&&<p className='animate__animated animate__fadeInDownBig'>Cargando</p>
    }
  <div className="card-grid">
    <ol>
        {
            images.map((img)=>{
                return <GifGridItem
                key={img.id}
                {...img}
                />
            })
        }
       
    </ol>
   

    </div>
    </>
  )
}

export default GifGrid