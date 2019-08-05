import React from 'react';

import stylesheet from 'styles/css/main.scss';

class Includes extends React.Component {


  setGoogleTags() {
      return {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag()

          {dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-128652726-1');

        `
      };
    }
  render() {

  	return (
        <div>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          <script src='/static/js/jquery.min.js'></script>
          <script src='/static/js/bootstrap.bundle.min.js'></script>
          <script src='/static/js/jquery.easing.1.3.min.js'></script>
          <script src='/static/js/scrollspy.min.js'></script>
          <script src='/static/js/jquery.sticky.js'></script>
          <script src='/static/js/waves.min.js'></script>
          <script src='/static/js/jquery.magnific-popup.min.js'></script>
          <script src='/static/js/switcher.js'></script>
          <script src='/static/js/app.js'></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-128652726-1"></script>
          


        </div>
  	);
  }
}

export default Includes;
