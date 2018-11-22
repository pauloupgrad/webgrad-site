import React from 'react';


const BoxPost = props => { 
    return (      
        <article className="card card_post">
            <img className="card-img-top" src="%PUBLIC_URL%/../assets/img/tamb/thamb1.jpg" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text text-justify">Some quick example text to build on the card title ...</p>
              <a href="#" className="btn btn-post">Go somewhere</a>
            </div>
        </article>                    
    );
  }

export default BoxPost;