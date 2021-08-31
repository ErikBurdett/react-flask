import React, {useEffect, useState} from 'react'
import './App.css'
import {Articles} from './components/Articles'
import ArticleList from './components/ArticleList'
import {ArticleForm} from './components/ArticleForm'
import {Details} from './components/Details'
import {Container} from "semantic-ui-react"

function App() {

  const [articles, setArticles] = useState([])

  useEffect(()=>{
    fetch('/get', {
      'method':'GET',
      headers: {
        'Content-Type': 'application/json'}
    }
  )
  .then(response=>response.json())
  .then(response =>setArticles(response))
  .catch(error => console.log(error))

  }, [])


  return (
    <div className="App">
      <h1>Flask and React</h1>
      <ArticleList articles ={articles}/>
      <div>
      <ArticleForm/>
    </div>
    </div>
    
  )
}

export default App










