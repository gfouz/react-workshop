import * as React from 'react';
import styled from "styled-components";
import postlist from "../../posts.json";
import { Link } from "react-router-dom";

function PostList() {
  return (
    <>
      <StyledPost>
        <Container>
           <h3 className="main-title">you might interest</h3>
          <CardList>
            {postlist.length &&
              postlist.map((post, i) => {
                return (
                  <Card className="post__card--hover" key={post.id}>
                    <img className="posts__image" src={`./images/${post.img}`} alt="post"/>
                    <CardBody>
                      <h5 className="posts__title">{post.title}</h5>
                      <small className="posts__info">
                        Published on: {post.date} by {post.author}
                      </small>
                      <p className="posts__description">{post.description}</p>
                      <Link className="posts__link" to={`/post/${post.id}`}>
                        Read More
                      </Link>
                    </CardBody>
                  </Card>
                );
              })}
          </CardList>
        </Container>
      </StyledPost>
    </>
  );
}
export default PostList;

const StyledPost = styled.div`
 background-color: #e1e1e1e1;
 min-height: 100%;
}
`;

const Container = styled.div`
padding: 2em 0;
max-width:960px;
.main-title {
color: #444444;
font-family: literata;
text-transform: uppercase;
}
`;
const CardList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 1em 0;
@media (max-width: 970px){
  justify-content: center;
}
.post__card--hover:hover {
  transform: scale(1.02);
  background-color: #000000;
  box-shadow: 1px 1px 10px #000000;
}
.posts__image {
   max-width: 150px;
   height: auto;
   object-fit: cover;
}  
.posts__body {
  
 }
`;
const Card = styled.div`
  display: flex;
  height: 170px;
  max-width: 470px;
  color: #c7bfa41;
  margin: 1em 0;
  transition: all 0.2s;
  text-align: left;
  font-family: literata;
  font-size: 12px;
  border-radius: 5px;
  font-size: 14px;
  background-color: #ffffff;
`;
const CardBody = styled.div`
  border-color:#0168b8;
  border-radius: 5px;
  padding: 1em;
  margin: 0 0.5em;
  color: #333333;
  .posts__title {
  color: #999999;
  margin: 0;
  padding: 0;
  font-weight: bolder;
  text-transform: uppercase;
  }
  .posts__description {
  color: #999999;
}
.posts__link {
  position: relative;
  top: 10px;
  margin: 0 0 1em 0;
  color: #0168b8;
}
`;

// {/*  */} these are comments
// some picked colors
// #0f1724 #11ece5   green #7fc549
// red #fe0002
