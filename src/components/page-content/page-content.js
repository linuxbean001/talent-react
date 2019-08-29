import React, { Component } from 'react';
class PageContent extends Component {
    constructor() {
		super();
		this.img_url2 = 'assets/images/illustration.png';
	}
    render() {
        return (
            <div className="col-md-7 height100">
                <div className="login_left_content height100" style={{ backgroundImage: `url(${this.img_url2}) `, backgroundColor: '#275AE6' }}>
                    <div>
                        <h2>How it works?</h2>
                        <div className="h_work_login">
                            <div className="h_works_grid">
                                <div className="h_work_img">
                                    <img src="assets/images/how_it_works1.svg" />
                                </div>
                                <div className="h_work_cont">
                                    <p>Join us</p>
                                </div>
                            </div>
                            <div className="h_works_grid">
                                <div className="h_work_img">
                                    <img src="assets/images/how_it_works2.svg" />
                                </div>
                                <div className="h_work_cont">
                                    <p>Bring your own talent pool or let us match your posts with the best ones</p>
                                </div>
                            </div>
                            <div className="h_works_grid">
                                <div className="h_work_img">
                                    <img src="assets/images/how_it_works3.svg" />
                                </div>
                                <div className="h_work_cont">
                                    <p>Get in touch with the talents with just a few clicks without cold calls or emails</p>
                                </div>
                            </div>
                        </div>

                        <h4>Download Our Mobile App</h4>
                        <ul className="list-inline login_app_icon">
                            <li><img src="assets/images/App-Store-wh.png" /></li>
                            <li><img src="assets/images/Google-Play-wh.png" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageContent; 
