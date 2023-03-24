import React from 'react'
import  {useQuery} from 'react-query'
import { getDetails } from './components/getData'

export const Details =({selProduct,setSelProduct})=> {
    const {data,status}=useQuery(['pricelist',selProduct.id],getDetails)
    status == 'success' && console.log(data.data)
    console.log('details:',selProduct)
  return (
    <div className='hurka'>
        <h1 className='asd'>{selProduct.name}</h1>
        <img className='asd2' src={selProduct.img_url} alt="pizza" />
        {status == 'success' && data.data.map(obj=>

        <div className='asd3'>{obj.size} - {obj.price}</div>
        )}
        <button onClick={()=>setSelProduct(null)}> vissza...</button>
    </div>
  )
}
