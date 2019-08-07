import React from 'react'
import Article from './../Article'
import Banner from './../Banner'
const Welcome =()=>{

    return (
<div>

        <Banner 
        backgroundImage= 'url(assets/img/bg-gift.jpg)'
        subtitle='Read and get updated on how we progress.'
        title='Latest Blog Posts'
        />
        <main className="main-content bg-gray">
          <div className="row">
             <div className="col-12 col-lg-6 offset-lg-3"> 
               <Article/>  
               <hr/>  
              <Article/>  
              <nav className="flexbox mt-50 mb-50">
  <button className="btn btn-white disabled">
    <i className="ti-arrow-left fs-9 mr-4" /> Newer</button>
  <button className="btn btn-white"  >Older
    <i className="ti-arrow-right fs-9 ml-4" />
  </button>
</nav>
            </div>
        </div>
        </main>
</div>
      );
};
export default Welcome;