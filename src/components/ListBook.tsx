import React from 'react'
import { BookItem } from '../modules/BookModule'
import BookCard from './BookCard'

const ListBook:React.FC<{books:BookItem[]}> = ({books}) => {
    return (

        <div className="w-11/12 mx-auto grid grid-cols-4 gap-5 mt-24">
            {books.map((book:BookItem) => (
                <BookCard book={book} key={book.id}/>
            ))}
        </div>
    )
}

export default ListBook
