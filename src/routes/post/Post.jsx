import * as React from "react";
import Navigate from "./Navigate";
import posts from "../../posts.json";
import styled from "styled-components";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import Header from "../../components/header/Header";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism";

function Post() {
  const slug = {};
  const params = useParams();
  const paramsId = parseInt(params.id);
  posts.forEach((post, i) => {
    if (paramsId === post.id) {
      slug.content = post.content ? post.content : "no given content";
      slug.id = post.id ? post.id : "no given id";
      slug.img = post.img ? post.img : "no give data";
      slug.position = post.position ? post.position : "no given position";
    }
  });
  const styles = {
     backgroundImage: `url(./images/${slug.img})`,
     backgroundRepeat: "no-repeat",
     backgroundSize: "cover",
     backgroundPosition: slug.position,
     height: "400px"
  }
  return (
    <>
      <StyledPost>
        <div className="l-post">
          <section className="post">
             <Header bg="#25180c" color="#ffffff" />
            <div className="post__image" style = {styles}></div> 
            <ReactMarkdown
              id={slug.id}
              className="post__markdown"
              children={slug.content}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      style={ghcolors}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
            <Navigate posts={posts} />
          </section>
        </div>
      </StyledPost>
    </>
  );
}
export default Post;

const StyledPost = styled.div`
  background-color: #f1f1f1;
  .l-post {
    margin: 0 auto;
    border: 2px solid #f1f1f1;
    @media (min-width: 700px) {
      max-width: 80%;
    }
  }
  .post__markdown {
    margin: 2em 0;
    padding: 0 0 3em 0;
    h2 {
      text-align: left;
      color: #444444;
      padding: 0 0.7em;
      margin: 0;
    }
    p {
      color: #333333;
      text-align: left;
      padding: 0.7em;
      margin: 0;
    }
    
  }
`;


/*<img className="post__image" src={`./images/${slug.img}`} alt="post" />*/