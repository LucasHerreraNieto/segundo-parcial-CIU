import './App.css';
import React, { useState } from 'react';
import BookCard from './components/bookCard/BookCard';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {v4 as uuid} from 'uuid';
import Favorites from './components/favorites/Favorites';

function App() {

  const [search,setSearch] = useState("");
  const [books,setbooks] = useState([]);

  const [show,setShow] = useState(false);
  const [bookItem,setItem] = useState();



    const submitForm = (e,evt) =>{
        
        //no page reload
        e.preventDefault();

        
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyD0CnfhgUl5FBC6pqf_AjRHxQe09mlzQSY'+'&maxResults=40')
        .then(res=>setbooks(res.data.items))
        .catch(err=>console.log(err));
        console.log(books)
  
    };

  return (
    <div>
      <NavBar/>
      <div>
        <Form className="d-flex" onSubmit={submitForm} style={{width:'40em', margin:"0 auto"}}>
          <Form.Control
            type="search"
            placeholder="Search For A Book"
            className="me-2"
            aria-label="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            />
            <Button 
              type='submit'
              variant="outline-success"
            >SEARCH</Button>
        </Form>
        
      </div>
      {
        books.map((item) => 
          <>
            <div onClick={()=>{setShow(true);setItem(item)}}>
              <BookCard 
              book={item} 
              key={uuid()}
              />
            </div>
            <Favorites 
            show={show} item={bookItem}
            key={uuid()}
            onClose={()=>setShow(false)}
            />
          </>
        )  
      }

    </div>
  );
}

export default App;
