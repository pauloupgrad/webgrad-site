import React from 'react';

import BoxPost from './main/BoxPost';
import AsideSobre from './main/AsideSobre';

const Main = props => { 
    return (
      <div className="container pt-5">      
       <section className="row">
            <article className="col-sm-12 col-md-6 col-lg-9 main_teste">
                <BoxPost/>
                <BoxPost/>
                <BoxPost/>
                <BoxPost/>
                <BoxPost/>
                <BoxPost/>
            </article>
            <aside className="col-sm-12 col-md-6 col-lg-3">
                <AsideSobre/>
                <AsideSobre/>
                <AsideSobre/>                
            </aside>
       </section>
      </div>
    );
  }

export default Main;