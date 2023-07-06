import React from 'react';
import imgPrueba from '../bookCard/portada-ejemplo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import './favorite.css';

const Favorites = ({show, item, onClose}) => {
    if(!show)
    {
        return null
    }

    const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;

    return (  
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><FontAwesomeIcon icon={faCircleXmark} /></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="description" className='imagen'/>
                        <div className="info">
                            <h2>{item.volumeInfo.title}</h2>
                            <h4>{item.volumeInfo.authors}</h4><br/>                            
                        </div>
                    </div>
                    <h5>{item.volumeInfo.description}</h5>
                </div>
            </div>
        </>
    );
}
 
export default Favorites;