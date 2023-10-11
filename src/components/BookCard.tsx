import React, { useState } from 'react'
import { BookItem } from '../modules/BookModule'
import { FcLikePlaceholder,FcLike } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../app/favoriteSlice'


const BookCard:React.FC<{book:BookItem}> = ({book}):React.JSX.Element => {
    const [favPage, setFavPage] = useState<boolean>(false)
    const dispatch = useDispatch()
    return (
        <div key={book.id} className="bg-gray-400 px-10 py-5 rounded-xl h-96 text-white flex flex-col justify-between shadow-lg">
            
            <img 
                src={book.volumeInfo.imageLinks.smallThumbnail} 
                alt={book.volumeInfo.title} 
                className="mx-auto w-1/2 h-1/2"
            />
            <h1 className="font-black">{book.volumeInfo.title}</h1>
            <div className="flex justify-between">
                <button>Learn more</button>
                <button 
                    onClick={() => {
                        dispatch(addToFavorite(book.volumeInfo.title))
                        setFavPage(!favPage)
                    }}
                    className="flex items-center text-4xl"
                >
                    {!favPage ? <FcLikePlaceholder/>  : <FcLike/>}
                </button>
            </div>
        </div>
    )
}

export default BookCard
