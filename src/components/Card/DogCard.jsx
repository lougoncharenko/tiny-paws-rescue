import { Col} from 'reactstrap';
import Card from '@mui/material/Card';
import './DogCard.css'


const DogCards = ({item}) => {
    return (
        <Col lg='3' md='4' 
        style={{marginBottom: "25px"}}>
        <Card
        style={{marginBottom: "25px"}}
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div className="product_img">
            <img src={item.image} alt="" />
          </div>
          <div className='p-2 product_info'>
            <h3 className="product_name">{item.name}</h3>
          </div>
          <div className='p-2 product_info'>
            <h3 className="product_name">${item.age}</h3>
          </div>
        </Card>
        </Col>
    )
}

export default DogCards;