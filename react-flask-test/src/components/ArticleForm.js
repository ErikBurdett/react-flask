import React, {useState} from 'react';
import {Form, Input, Button} from 'semantic-ui-react';

export const ArticleForm = () =>{
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("")

return (
    <Form>
        <Form.Field>
            <Input placeholder="title"
            value ={title}
            onChange={e =>setTitle(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <Input placeholder="body"
            value = {body}
            onChange={e =>setBody(e.target.value)}/>
        </Form.Field>
        <Form.Field>
            <Button
            onClick={ async () =>{
                const article = {title, body}
                const response = await fetch("/add", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({title:title, body:body})
                })
                .then(response=> response.json())
                .catch(function(error){
                    console.log("error with fetch:" + error.message);
                    //throws error
                    throw error;
                })
            }}>Submit
            </Button>
        </Form.Field>
    </Form>
    )
}