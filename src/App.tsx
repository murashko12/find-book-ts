import { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import axios from "axios"
import { BookItem } from "./modules/BookModule"
import { useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import FavoritePage from "./pages/FavoritePage"

function App() {

    const [books, setBooks] = useState<BookItem[]>([])
    const [search, setSearch] = useState<string>("")
    const [countBooks,setCountBooks] = useState<number>(16)

    const API: string = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBzMmKAHjxRFwwogI3jidqBkkmDw38ogBw&maxResults=${countBooks}`

    useEffect(() => {
        try {
            axios.get(API).then((res) => {
                console.log(res.data.items)
                setBooks(res.data.items)
            })
        } catch(err) {
            console.log(err)
        }
    },[API])

    const favoriteItems = useSelector(state => state.favorite.favorite)
    const favoriteItemsLength:number = favoriteItems.length
    return (
        <>
            <Navbar favoriteItemsLength={favoriteItemsLength} books={books} setBooks={setBooks} search={search} setSearch={setSearch}/>
            <Routes>
                <Route path="/" element={<HomePage books={books}/>}></Route>
                <Route path="/favorite" element={<FavoritePage/>}></Route>
            </Routes>
            { 
                !books.length || countBooks === 40
                ?
                <div className="mt-5"></div>
                : 
                <div className="w-full flex justify-center">
                    <button 
                        className={`my-5 font-black mx-0 bg-gray-${countBooks === 40 ? 100 : 400} text-white p-2 rounded-md`} 
                        disabled={countBooks === 40} onClick={() => setCountBooks(countBooks + 8)}
                    >
                        <h1>LOAD MORE</h1>
                    </button>
                </div>
            }
        </>
    )
}

export default App
