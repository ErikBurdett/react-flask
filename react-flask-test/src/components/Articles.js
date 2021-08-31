import React from 'react'
import {List, Header} from "semantic-ui-react"

export const Articles = ({articles}) => {
    return (
        <List>
            {articles.map(article =>{
                return(
                <List.Item key={article.title}>
                    <h1>< a href="/details">{article.title}</a></h1>
                        
                       

                </List.Item>
                )
            })}
        </List>

    )
}

export default Articles
