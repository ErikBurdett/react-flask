import React, {Component} from 'react';
// import PostForm from './components/PostForm';

class App extends Component {

  async postData(){
    try{
      let result = await fetch('https://flaskreact-n-weektwotes-rkuxmn.herokuapp.com/add', {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Accept':'application/json',
          'Content-Type':'application/json',
        },
        body: JSON.stringify({
          'title': 'React Post Test 1',
          'body': 'React Post Body Test 1'
        })

      });
      console.log('Result' + result)

    }catch(e){
      console.log(e)
    }
  }

  render(){
    return(
    <>
    {/* <PostForm></PostForm> */}
    </>
    );
  }
}



export default App;
