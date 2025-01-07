import React from 'react'
import Link from "next/link"

const Home =async () => {

  interface IData{
    id: number,
    name: string,
    type: string,
    available: boolean
  }
 

  //Fetch Data
  const res = await fetch("https://simple-books-api.glitch.me/books");
  const data:IData[] = await res.json();
  console.log(data)
  return (
   <>
   {data.map((book)=>{
    return(
    <Link href={`/Booklist/${book.id}`}key={book.id}>
      <h1 className="text-[20px] font-[700] p-[15px]">{book.name}</h1>
      </Link>
  )
   })}
 </>
  )
}
export default Home;



// export default async function Home(){

// const res = await fetch("http://localhost:3000/api/message")
// const data = await res.json();
// console.log(data);

//     return(
//        <>
//         <h1>helllo Fatimah!!</h1>
//         <h2>{data.message}</h2>
//         </>
//     )
// }
