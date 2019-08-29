import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
const percentage1 = 66;
const percentage2 = 90;
class Profile extends Component {
	
	render() {
		return (

			<div className="profile_right_panel">
				<div className="profile_grid mb-30">
					<h2>Criteria</h2>
				
					<div className="profle_inner_grid">
						<div className="row">
							<div className="col-md-4">
								<div className="prof_right_cont">
									<h3>PREFERRED EMPLOYMENT</h3>
									<p>$120.000 — Full Time Salary</p>
									<p>$100 — Contract - W2 Salary</p>
								</div>
								<div className="prof_right_cont">
									<h3>CURRENT LOCATION</h3>
									<p>Adalanto</p>
								</div>
								<div className="prof_right_cont">
									<h3>RELOCATE</h3>
									<p>Yes — Adalanto, Alameda</p>
								</div>
								<div className="prof_right_cont">
									<h3>STATUS IN THE US</h3>
									<p>No sponsorship needed</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="prof_right_cont">
									<h3>TOTAL EXPERIENCE</h3>
									<p>2 Years</p>
								</div>
								<div className="prof_right_cont">
									<h3>CURRENTLY EMPLOYED</h3>
									<p>Yes — Emlakjet</p>
								</div>
								<div className="prof_right_cont">
									<h3>MAIN SKILLSET</h3>
									<p>Interaction Design</p>
									<p>UX Design</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="prof_right_cont">
									<h3>TARGET TITLES</h3>
									<p>Product Designer</p>
									<p>UI Designer</p>
									<p>UX Designer</p>
									<p>Interaction Designer</p>
								</div>
								<div className="prof_right_cont">
									<h3>BENEFITS</h3>
									<p>Lorem ipsum dolor</p>
									<p>Sit amet contectetur</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="profile_grid mb-10">
					<h2>Question & Answer</h2>
					<div className="profle_inner_grid">
						<div className="row">
							<div className="col-md-12">
								<div className="profile_inner_title">
									<h4>General Questions</h4>
								</div>
							</div>
							<div className="col-md-4">
								<div className="prof_right_cont">
									<h3>Why did you leave?</h3>
									<p>Company problems</p>
								</div>
								<div className="prof_right_cont">
									<h3>When did you leave?</h3>
									<p>2 weeks ago</p>
								</div>
								<div className="prof_right_cont">
									<h3>What is your notice period?</h3>
									<p>None</p>
								</div>
								<div className="prof_right_cont">
									<h3>When can you start?</h3>
									<p>3 week later</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="prof_right_cont">
									<h3>years of experience?</h3>
									<p>10 years</p>
								</div>
								<div className="prof_right_cont">
									<h3>actively looking for a job?</h3>
									<p>Yes</p>
								</div>
								<div className="prof_right_cont">
									<h3>Visa status?</h3>
									<p>H1B</p>
								</div>
								<div className="prof_right_cont">
									<h3>salary or rate expectation negotiable?</h3>
									<p>No</p>
								</div>
								<div className="prof_right_cont">
									<h3>Availability for face to face interviews?</h3>
									<p>It’s okay</p>
								</div>
							</div>
							<div className="col-md-4">
								<div className="prof_right_cont">
									<h3>Skill Expertise Level</h3>
									<div className="skill_progress">

										<CircularProgressbar percentage={percentage1} text={`8`} />
										<div className="progress_content">
											<p>Interaction Design</p>
										</div>
									</div>

									<div className="skill_progress">
										<CircularProgressbar percentage={percentage2} text={`10`} />

										<div className="progress_content">
											<p>UX Design</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="profile_grid mb-30">
					<div className="profle_inner_grid">
						<div className="row">
							<div className="col-md-12">
								<div className="profile_inner_title">
									<h4>Technical Questions</h4>
								</div>
							</div>
							<div className="col-md-6">
								<div className="prof_right_cont">
									<h3>Are you familar with testing tools like selenium, Jmeter etc.</h3>
									<p>I did use Jmeter</p>
								</div>
								<div className="prof_right_cont">
									<h3>Are you familiar with Elastic search?</h3>
									<p>Yes, absolutely</p>
								</div>
								<div className="prof_right_cont">
									<h3>Are you familiar with using several ORMS?</h3>
									<p>Nope</p>
								</div>
								<div className="prof_right_cont">
									<h3>Are you familiar with writing test cases in frameworks?</h3>
									<p>No</p>
								</div>
								<div className="prof_right_cont">
									<h3>Do you have a github account that you would like to share?</h3>
									<p>I don’t have a github account</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="prof_right_cont">
									<h3>Do you have a Masters Degree?</h3>
									<p>I am thinking</p>
								</div>
								<div className="prof_right_cont">
									<h3>Do you have experience with any WebDev Frameworks?</h3>
									<p>Yes 2 years</p>
								</div>
								<div className="prof_right_cont">
									<h3>Have you worked on Automation testing?</h3>
									<p>2 years ago i have worked</p>
								</div>
								<div className="prof_right_cont">
									<h3>Specify the duration of experience for each framework?</h3>
									<p>4 Frameworks</p>
								</div>
								<div className="prof_right_cont">
									<h3>Are you familar with process control tools like Jira etc?</h3>
									<p>I did use all of them</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="profile_grid note_recruiters mb-30">
					<h2>Note to Recruiters</h2>
					<div className="profle_inner_grid">
						<div className="row">
							<div className="col-md-12">
								<div className="prof_right_cont">
									<p>“IT” (otherwise known as HD 36405.b) isn’t your average “oddball” exo-solar planet made of rock that wobbles on its end & zips around a nearby star in less than 2.46 days.</p>
									<p>Seeking a spot of serenity somewhere in the universe, I recently booked a deep-discount dodgy berth on the ‘White Elephant Express Space Shuttle’, to a little known place in a galaxy far, far away.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="profile_grid note_recruiters">
					<h2>Resume</h2>
					<div className="profle_inner_grid">
						<div className="row">
							<div className="col-md-6 col-md-offset-3">
								<div className="prof_resume">
									<img src="assets/images/resume.png" />
								</div>
							</div>
						</div>
						<div className="zoom_div">
							<ul className="list-inline">
								<li><a href="#"><img src="assets/images/minus-icon.png" /></a></li>
								<li><a href="#"><img src="assets/images/plus-icon.png" /></a></li>
							</ul>
						</div>
					</div>
				</div>

			</div>

		);
	}
}
export default Profile;