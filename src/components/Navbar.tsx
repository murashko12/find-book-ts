import React, { useState } from "react"
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';
import { BookItem } from "../modules/BookModule"
import { GiBurningBook, GiBookshelf } from 'react-icons/gi';
import { Link } from "react-router-dom";

interface Props {
    books: BookItem[],
    setBooks: React.Dispatch<React.SetStateAction<BookItem[]>>,
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    favoriteItemsLength: number   
}

const Navbar = (props: Props) => {
    const [favPage, setFavPage] = useState<boolean>(false)

    return (
        <div className="bg-gray-400 w-full h-20 shadow-lg fixed flex items-center top-0">
        <div className="flex justify-between w-11/12 mx-auto">
            <h1 className="flex items-center text-white text-4xl"><GiBurningBook/>FindBOOK<GiBookshelf/></h1>
            {!favPage ? <div className="flex gap-2">
                <input 
                    type="text" 
                    className="rounded-md text-gray-500 px-2 py-2 w-96"
                    placeholder="Books..."
                    value={props.search}
                    onChange={(e) => props.setSearch(e.target.value)}
                />
                <button 
                    className="rounded-md  px-2.5 py-2  font-semibold text-white shadow-sm ring-1 ring-inset ring-white"
                >
                    Search
                </button>
            </div> : <></>}
            <button 
                onClick={() => setFavPage(!favPage)}
                className="flex items-center text-white text-4xl"
            >
                {
                    !favPage 
                        ? <Link to="/favorite"><AiOutlineHeart /></Link> 
                        : <Link to="/"><AiFillHeart /></Link>
                }
                <h1>{props.favoriteItemsLength}</h1>
            </button>
        </div>
        </div>
    )
}

export default Navbar
