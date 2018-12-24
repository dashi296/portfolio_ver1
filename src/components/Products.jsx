import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';


const PRODUCTS = [
  {title:"TWESUME", description:"Twitter転職支援サービス", image:"twesume.png", 
  backChips:['Rails','Heroku'], frontChips:['jQuery','Bootstrap','html2canvas'], url:"https://twesumes.net"},
  {title:"Draft Box", description:"オンラインMarkdownメモサービス", image:"draftbox.png", 
  backChips:['Rails','Heroku'], frontChips:['jQuery','Marked.js'], url:"https://draftbox.herokuapp.com"}
];

//BackとFrontのChipのリスト
const ChipList = props => {
  const chiplist = props.chips.map((chip,index) => {
    return (
    <Chip label={chip} key={index} className="chip" />
    );
  });
  
  return(
    <div className="chip-list">
      {chiplist}
    </div>
  );
}

const Product = props => {
  const { classes } = props;
  return (
    <Card className="product-card">
      <CardActionArea href={props.url} target="_blank">
        <CardMedia
          className="product-img"
          image={require('../images/' + props.image)}
          title={props.title + "_img"}
        />
        <CardContent>
          <Typography gutterBottom variant="h4">
            {props.title}
          </Typography>
          <Typography component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <p className="chip-title">利用した主な技術</p>
      <ChipList chips={props.frontChips} />
      <ChipList chips={props.backChips} />
    </Card>
  );
}

Product.propTypes = {
  classes: PropTypes.object.isRequired,
};


const ProductList = () =>{
  const products = PRODUCTS.map((product, index) => {
    return (
      <Product title={product.title} description={product.description} 
      image={product.image} backChips={product.backChips} frontChips={product.frontChips} 
      url={product.url}
      key={index} />
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
