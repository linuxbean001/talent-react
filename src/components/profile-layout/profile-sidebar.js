import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
class ProfileSidebar extends Component {
    constructor(props) {
		super(props);
		this.state = {
		  show: false,
		};
	}
	
    handleClose = ()=> {
	   this.setState({ show: false });
    }

    handleShow =() => {
	   this.setState({ show: true });
    }
    render() {
        return (
            <div className="profile_left_panel">
                <div className="profile_detail">
                    <h2>Enes Aktas</h2>
                    <p className="lead_prof_txt">Product Designer</p>
                    <ul className="prof_uline">
                        <li><Link to="#"><img src="assets/images/AskQuestion.svg" alt=""/>Ask About This Candidate</Link></li>
                        <li><Link to="#"><img src="assets/images/SendOpportunity.svg" alt=""/>Send Opportunity</Link></li>
                        <li><Link to="#"><img src="assets/images/ScheduleCall.svg" alt=""/>Schedule Call</Link></li>
                        <li><Link to="#"><img src="assets/images/ViewResume.svg" alt=""/>View Resume</Link></li>
                    </ul>
                    <div className="contact_prof_btn">
                        <button type="button" className="btn" onClick={this.handleShow}>Contact</button>
                    </div>
                </div>
                <div className="highlight_prof">
                    <h3>Highlights</h3>
                    <ul className="heihlight_uline">
                        <li>
                            <div className="clearfix">
                                <strong className="pull-left">Responsiveness</strong>
                                <p className="pull-right">%80</p>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <strong className="pull-left">Relevant Experience</strong>
                                <p className="pull-right">3 Years</p>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <strong className="pull-left">Relevant Skillset</strong>
                                <p className="pull-right">5 / 10</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="available_times">
                    <h3>Available Times</h3>
                    <div className="today_available_box">
                        <img src="assets/images/check-icon.svg" alt=""/><span>Today,<br />Available Until 14:00</span>
                    </div>
                    <ul className="avail_uline">
                        <li>
                            <div className="clearfix">
                                <strong className="pull-left">Monday</strong>
                                <p className="pull-right">09:00 - 20:00<br />21:00 - 22:00</p>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <strong className="pull-left">Tuesday</strong>
                                <p className="pull-right">09:00 - 20:00</p>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <strong className="pull-left">Wednesday</strong>
                                <p className="pull-right">09:00 - 20:00<br />21:00 - 22:00</p>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <strong className="pull-left">Thursday</strong>
                                <p className="pull-right">09:00 - 20:00</p>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <strong className="pull-left">Friday</strong>
                                <p className="pull-right">09:00 - 20:00</p>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <strong className="pull-left">Saturday</strong>
                                <p className="pull-right">Not Available</p>
                            </div>
                        </li>
                        <li>
                            <div className="clearfix">
                                <strong className="pull-left">Sunday</strong>
                                <p className="pull-right">Not Available</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} className="model_popup">
                  <button type="button" className="close" onClick={this.handleClose}><img src="assets/images/Close.svg" alt=""/></button>
                  <Modal.Body>
                      <div className="row">
                    	<div className="col-md-5">
                    		<div className="phone_img">
                    			<img src="assets/images/Phone.png" alt=""/>
                    		</div>
                    	</div>
                    	<div className="col-md-7">
                    		<div className="profile_popup_content">
                    			<h2>If you want to talk to this candidate download our mobile app</h2>
                    			<p className="lead_pop_txt">Enter your 10-digit US mobile number and we'll send a download link directly to your phone:</p>
                    			<form className="popup_send_form clearfix" action="#">
                    				<input type="text" name="" className="form-control" placeholder="Phone Number"/>
                    				<button type="submit" className="btn send_btn">Send Link</button>
                    			</form>
                    			<div className="download_buttons">
                    				<p>OR YOU CAN DOWNLOAD DIRECTLY</p>
                    				<ul className="list-inline">
                    					<li><img src="assets/images/App-Store.png" alt=""/></li>
                    					<li><img src="assets/images/Google-Play.png" alt=""/></li>
                    				</ul>
                    			</div>
                    			<Link to="#" className="visit_link">Visit Our Website</Link>
                    		</div>
                    	  </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
export default ProfileSidebar;