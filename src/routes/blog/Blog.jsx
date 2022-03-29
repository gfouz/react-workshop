import * as React from 'react';
import styled from "styled-components";
import Postlist from "./Postlist";
import Header from "../../components/header/Header";

function Blog() {

  React.useEffect(()=> {
      const windowWidth = ()=> {
        document.title = window.innerWidth;
      }
      window.addEventListener('resize', windowWidth);
  }, [])
  return (
    <>
      <StyledBlog>
        <BlogLayout>
          <Header bg="#25180c" color="#ffffff" />
          <Main>
              <div className="blog__image">
                <h1 className="blog__title">Inquisitive as children.</h1>
              </div>
            <article className="blog__posts">
              <Postlist />
            </article>
          </Main>
          <footer className="blog-footer">
            <h3>gfouz &copy; {new Date().getFullYear()} made with react</h3>
          </footer>
        </BlogLayout>
      </StyledBlog>
    </>
  );
}

export default Blog;

const StyledBlog = styled.div`
  background-color: #e1e1e1e1;
  .blog__image {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    height: 500px;
    background-image: url('./images/blog.jpg');
    background-size: 1300px;
    background-position: center;
    background-repeat: no-repeat;
    }
  .blog__title {
    margin: 0 0 2.2em 0;
    font-family: calibri;
    color: #ffffff;
    text-transform: uppercase;
    background-color: #846040;
    padding: 0 5px;
    border-radius: 9px;
  }
  }
  .blog-footer {
    background-color: #25180c;
    display: grid;
    place-items: center;
    color: #ffffff;
  }
`;
  const BlogLayout = styled.div`
  display: grid;
  grid-template-rows: 60px auto 60px;
  grid-template-cols: 1fr;
  min-height: 100vh;
`;
 const Main = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: flex-start;
`;