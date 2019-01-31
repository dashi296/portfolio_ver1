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


const BLOGS = [
  {title:"Uniblo-ゆにブロ-", description:"初心者が趣味でオンラインゲームを開発するブログ", image:"uniblo.png", url:"https://uniblo.biz/"},
  {title:"Uniweb", description:"Webアプリ開発ノウハウ貯蔵庫", image:"uniweb.png", url:"https://uniblo.biz/webapp/"}
];

const Blog = props => {
  const { classes } = props;
  return (
    <Card className="blog-card">
      <CardActionArea href={props.url} target="_blank">
        <CardMedia
          className="blog-img"
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

    </Card>
  );
}

const BlogList = () =>{
  const blogs = BLOGS.map((blog, index) => {
    return (
      <Blog title={blog.title} description={blog.description} 
      image={blog.image}
      url={blog.url}
      key={index} />
    );
  });

  return(
    <div className="blogs">
      <div className="section-title">BLOG</div>
      <div className="section-description">たまにかいている開発ブログです。</div>
      <div className="card-container">
      {blogs}
      </div>
    </div>
  );
}

export default BlogList;