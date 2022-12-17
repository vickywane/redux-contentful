import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/banner'
import CraftCard from '../components/CraftCard'
import { fetchArtworks } from '../state/product.action'
import '../App.css'


export function Index() {
    const dispatch = useDispatch()
    const { artworks } = useSelector((state) => state.products)

    React.useEffect(() => {
        dispatch(fetchArtworks())
    }, [])

    return (
        <div>
            <Banner />

            <ul className='cards-list' >
                {
                    artworks.map(({ fields }, idx) => (
                        <li id={idx} >
                            <CraftCard
                                description={fields.description}
                                name={fields.name}
                                price={fields.price}
                            />
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}