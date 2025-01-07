import React from 'react'

const Books = (props : any) => {
  return (
    <>
    <h1>{props.params.id}</h1>
    <h1>{props.params.name}</h1>
    </>
  )
}

export default Books;
