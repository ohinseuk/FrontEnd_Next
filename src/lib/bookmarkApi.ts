// import { BookmarksResponse } from "@/types"
// import axios, { AxiosResponse } from "axios"

// //const API_BASE_URL = 'http://localhost:8080'
// const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL

// export async function getAllBookmarks(page: number, query?: string): Promise<BookmarksResponse> {
//     //const res = await axios.get<BookmarksResponse>(`${API_BASE_URL}/api/bookmarks`)
//     let API_URL = `${API_BASE_URL}/api/bookmarks?page=${page}`
//     if(query) {
//         API_URL += `&query=${query}`
//     }
//     console.log(`url = ${API_URL}`)
    
//     const res = await axios.get<BookmarksResponse>(API_URL)

//     return res.data
// }

// export async function saveBookmark(bookmark:{title: string, url: string}) {
//     //const res: AxiosResponse<unknown, unknown> = await axios.post(`${API_BASE_URL}/api/bookmarks`, bookmark)
//     const res: AxiosResponse<unknown, unknown> = await axios.post(`/api/bookmarks`, bookmark)
//     return res.data
// }
import { BookmarksResponse } from "@/types"
import axios from "axios"

const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_API_BASE_URL

export async function getAllBookmarks(page: number, query: string): Promise<BookmarksResponse> {
        
    let API_URL = `${API_BASE_URL}/api/bookmarks?page=${page}`
    if(query) {
        API_URL += `&query=${query}`
    }
    console.log(`>> url = ${API_URL}`)
    
    const res = await axios.get<BookmarksResponse>(API_URL)

    return res.data
}

export async function saveBookmark(bookmark:{title: string, url: string}) {
    const res = await axios.post(`/api/bookmarks`, bookmark)
    return res.data
}