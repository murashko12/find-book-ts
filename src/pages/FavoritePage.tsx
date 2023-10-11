import React from 'react'
import { useSelector } from 'react-redux'
// import BookCard from '../components/BookCard'
import { BookItem } from '../modules/BookModule'


const FavoritePage:React.FC = () => {
    const favoriteItems = useSelector(state => state.favorite.favorite)
    return (
        <>
            {favoriteItems.map((book:BookItem) => {
                console.log("-----");
                
                console.log(book.volumeInfo.title);
                
                return (
                    <h1>{book.volumeInfo.title}</h1>
                )
            })}
        </>
    )
}

export default FavoritePage
