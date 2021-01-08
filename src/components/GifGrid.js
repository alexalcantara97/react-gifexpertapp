import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);    
    const {data:images, loading} = useFetchGifs(category);
    // useEffect( () => {
    //     getGifs(category).then(setImages);
    // }, [category])

    

    //getGifs();

    return (
        <>
            <h3 className = 'animate__animated animate__bounce'>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className = 'card-grid'>
            {
                images.map(image => (
                    <GifGridItem 
                        key = {image.id}
                        {...image}
                    />
                ))
            }
            </div>
        </>
    );
}
