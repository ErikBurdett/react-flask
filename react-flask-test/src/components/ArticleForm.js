import React, {useState} from 'react';
import {Form, Input} from 'semantic-ui-react';

export const ArticleForm = () =>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')


return (
    <Form>
        <Form.Field>
            <Input placeholder="title" value ={title}/>
        </Form.Field>
        <Form.Field>
            <Input placeholder="body" value = {body}/>
        </Form.Field>
    </Form>
    
    )
}