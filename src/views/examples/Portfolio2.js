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

class Portfolio2 extends React.Component {

  render() {
    document.getElementById('example-0')
    // const ImageFolder = require.context('../../assets/img', true);

    return (
      <div>
        <ExamplesNavbar />
        {/* <PortfolioPageHeader /> */}

        <div className="section portfolio-content" id="portfolio-section">
          <h1 id="portfolio-h1"> Portfolio </h1>

          <div style={{
                    display: "block",
                    minHeight: "1px",
                    width: "100%",
                    overflow: "auto"}}>
          <Gallery photos={imglist} direction={"row"} />
          {/* <Gallery id="gallery" images={IMAGES} backdropClosesModal={true} rowHeight={300} margin={5} enableImageSelection={false} /> */}
         
          </div>

      </div>
      </div>




    );

  }
}


export default Portfolio2;
