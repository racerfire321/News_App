"use client"
import { useRouter } from 'next/navigation';
import React, { FormEvent, FormHTMLAttributes, useState } from 'react'

function SearchBox ()  {
  const[input,setInput] = useState();
  const router = useRouter();
  const handleSearch=(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(!input) return;
    router.push(`/search?term=${input}`)

  }
  return (
  <form onClick={handleSearch} className='max-w-6xl mx-auto flex justify-between items-center px-5'>
    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}
    placeholder='Search keyword...'
    className=' w-fulll h-10 rounded-sm outline-none flex-1 transparent dark:text-orange-400' />
      <button disabled={input} type='submit'>Search</button>
  </form>
  )
}

export default SearchBox