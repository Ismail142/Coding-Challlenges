import { useRef, useState } from 'react';
import './App.css'



function App() {
  const [text,setText] = useState('');
  const timeRef = useRef(null);

  const onSearch = (query)=>{
    setText(query);
  };

  const inputSearchHandler = (e)=>{
    const value = e.target.value;

    if (timeRef.current) clearTimeout(timeRef.current);
  
    timeRef.current = setTimeout(() => {
      onSearch(value);
    }, 500);

  }


  return (
    <form className='flex justify-center flex-col'>
     <input type="text" placeholder='search anything....' className='border-2 border-gray-500 rounded-md p-2' onChange={inputSearchHandler}/>
     <p className='my-4 self-center text-lg'>Searching for {text}</p>
    </form>
  )
}

export default App
