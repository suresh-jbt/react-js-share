import React, {Component} from 'react';
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';
class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center page-title"><i> Share Buttons Example</i></h3>
        <hr/>
        <br/>
        <div className="row">
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <a href="javascript:void(0)"
               onClick={() => window.open('https://api.stocktwits.com/widgets/share',
                 'Stock Twits Share','height=200,width=150')}>
              <img src="https://api.stocktwits.com/assets/widget/stocktwits_share.png"
                   alt="Share on StockTwits"/>
            </a>
          </div>
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <TwitterShareButton title={'Twitter share test'}
                                url={'http://example.com'}
                                via={'demo-user'}
                                hashtags={['demo', 'test' , 'sharebutton']}>
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
          </div>
          <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <LinkedinShareButton title={'LinkedIn share test'}
                                 url={'http://example.com'}
                                 description={'LinkedIn share demo test'}>
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
          </div>
          <br/>
        </div>
      </div>
    );
  }
}

export default Home;
