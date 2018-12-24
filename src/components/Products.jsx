import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const PRODUCTS = [
  {title:"TWESUME", description:"Twitter転職支援サービス", image:"twesume.png"},
  {title:"Draft Box", description:"オンラインメモサービス", image:"noimage_gray.jpg"}
];

const Product = props => {
  return (
    <Card className="product-card">
      <CardActionArea>
        <CardMedia
          className="product-img"
          image={require('../images/' + props.image)}
          title={props.title + "_img"}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

Product.propTypes = {
  classes: PropTypes.object.isRequired,
};


const ProductList = () =>{
  const products = PRODUCTS.map((product, index) => {
    return (
      <Product title={product.title} description={product.description} image={product.image} key={index} />
    );
  });

  return(
    <div className="products">
      <div className="section-title">PRODUCTS</div>
      <div className="section-description">今まで趣味で開発したWebアプリケーションです</div>
      <div className="card-container">
      {products}
      </div>
    </div>
  );
}

export default ProductList;
