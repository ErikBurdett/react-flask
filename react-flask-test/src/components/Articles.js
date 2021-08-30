import React from 'react'
import {List, Header} from "semantic-ui-react"

export const Articles = ({articles}) => {
    return (
        <List>
            {articles.map(article =>{
                return(
                <List.Item key={article.title}>
                    <Header>{article.title}</Header>

                </List.Item>
                )
            })}
        </List>

    )
}

export default Articles
