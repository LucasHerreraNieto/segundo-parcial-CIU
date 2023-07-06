import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {v4 as uuid} from 'uuid';

const BookCard = ({book}) => {
    
    const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
    const autor = book.volumeInfo.authors;
    const categories = book.volumeInfo.categories;
    const language = book.volumeInfo.language;


    return ( 
        <>
            <Card 
                    style={{width:"40em", margin:"0 auto", height:"20em", marginTop:"1em"}}//agregar Css externo
            >
                <Card.Header as="h5" style={{display:"flex", justifyContent:"space-between",height:"5em"}} //agregar css externo
                >
                    <Card.Title>{book.volumeInfo.title}</Card.Title> 
                    <Button variant="outline-danger" style={{width:"5em",height:"3em"}}//agregar css externos
                    >
                    <FontAwesomeIcon icon={faHeart} style={{color: "#F00",}} /></Button>{' '}
                </Card.Header>
            
                <Card.Body 
                style={{display:"flex"}}//agregar Css externo
                >
                    <div>
                        <img src={thumbnail} alt="bookImage" style={{width:"8em", marginLeft:"6em"}}/>
                    </div>
                    <div style={{marginLeft:"6em"}}>
                        <Card.Title>Autor</Card.Title>
                        <Card.Text>
                            {autor}
                        </Card.Text>
                        <Card.Title>categories</Card.Title>
                        <Card.Text>
                            {categories}
                        </Card.Text>
                        <Card.Title>language</Card.Title>
                        <Card.Text>
                            {language}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>

        </>
    );
}
 
export default BookCard;