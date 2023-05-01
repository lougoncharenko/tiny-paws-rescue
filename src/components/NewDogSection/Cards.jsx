import React from 'react';
import { Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import './TrendingProducts.css'



const Cards = ({item}) => {
  return (
    <Col lg='3' md='6'
    style={{
      padding: '30px'
    }} >
      <div 
      className="product_item">
        <div className="product_img">
        <Link to={`/shop/${item.ID}`}>
        <img 
        src={item.image} alt="" />
        </Link>
        </div>
        <div className='p-2 product_info'>
          <h3 className="product_name">{item.name}</h3>
        </div>
        <div className='p-2 product_info'>
          <h3 className="product_name">{item.breed}</h3>
        </div>
         
         <div className="product_card-bottom">
         </div>
      </div> 
      </Col>
  );
}

export default Cards;
