import React, {useEffect, useState} from 'react'
import './App.css'
import Articles from './components/Articles'

function App() {

  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    fetch('/get')
    .then(response=>response.json()
    .then(data =>{
      setArticles(data);
    }))

  }, [])


  return (
    <div className="App">
      <Articles articles = {articles}/>
    </div>
  )
}

export default App










