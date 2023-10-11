import React from 'react'
import ListBook from '../components/ListBook'
import { BookItem } from '../modules/BookModule'

const HomePage:React.FC<{books:BookItem[]}> = ({books}) => {
    return (
        <>
            <ListBook books={books}/>   
        </>
    )
}

export default HomePage
