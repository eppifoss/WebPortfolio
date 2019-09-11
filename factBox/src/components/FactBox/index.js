import React, {useState, useEffect} from 'react';

import './style.css';

export const  FactBox =  ({number}) => {

  const [text, setText] = useState('Click on a number');
  const [loading, setLoading] = useState(false);


  /*
    1. useEffect ( () => { something }, [])   == componentDidMount (Only when rendered first time.)
    2. useEffect ( () => { })                 == (Everytime the component is rendered the first time.)
    3. useEffect ( () => { something }, [ something2]) == Rerenders when something2 changes.
   */

   useEffect( ()  => {

     // const getFact = () => {
     //      fetch(`http://numbersapi.com/${number}?json`)
     //      .then( response => response.json() )
     //      .then( data => setText(data.text))
     //
     // }

     const getFact = async () => {
      setLoading(true)
      const response = await fetch(`http://numbersapi.com/${number}?json`)
      const data = await response.json()
      setText(data.text)
      setLoading(false)

     }

     if (number) {
       getFact();
     }


   }, [number]);


  return (
    <article className="fact-box">
        <p>
          {loading ? "Loading" : text }
        </p>
    </article>
  )

}
