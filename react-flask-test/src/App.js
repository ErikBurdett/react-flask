import React, {useEffect, useState} from 'react'
import './App.css'
import {Articles} from './components/Articles'
import {ArticleForm} from './components/ArticleForm'
import {Container} from "semantic-ui-react"

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
      <Container style={{marginTop: 40}}>
        <ArticleForm/>
        <Articles articles = {articles}/>
      </Container>
    </div>
  )
}

export default App










