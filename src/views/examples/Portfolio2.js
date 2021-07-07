/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import Gallery from "react-photo-gallery";
import { render } from "react-dom";
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import PortfolioPageHeader from "components/Headers/PortfolioPageHeader.js";
import {imglist} from "../../assets/imglist";
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  settings : {
    disablePanzoom: true,
    // disableWheelControls: true
  },
  buttons : {
    showDownloadButton: false
  },
  // thumbnails : {
  //   thumbnailsAlignment: 'center'
  // }

}

class Portfolio2 extends React.Component {
  // https://www.npmjs.com/package/simple-react-lightbox link for proper light box

  
  render() {
    document.getElementById('example-0')
    // const ImageFolder = require.context('../../assets/img', true);
    var imgListRenders = imglist.map(function(img){
      return <a href={img.src}>
          {/* <img src={img} alt={img} /> */}
          <a href={img.src}> 
        <img
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          className="portfolio_images"
          srl_gallery_image="true" // Add this if your thumbnail is not recognized
        />
      </a>
      </a>;
    })

  
    return (
      <div>
        <ExamplesNavbar />
        {/* <PortfolioPageHeader /> */}

        <div className="section portfolio-content" id="portfolio-section">
          <h1 id="portfolio-h1"> Portfolio </h1>

        </div>
      
        <SimpleReactLightbox> 
          <SRLWrapper options={options}>
            <div className="parent_div">
              {imgListRenders}
             </div>

            
        </SRLWrapper>
        </SimpleReactLightbox>

      </div>
      // </div>




    );

  }
}


export default Portfolio2;
