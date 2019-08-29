import React, { Component } from 'react';
import ProfileSidebar from './profile-sidebar';
import Profile from './profile';
class ProfileLayout extends Component {
    render() {
        return (
            <div>
                <div className="main_profile">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 p-0">
                                <div className="profile_content">
                                    <ProfileSidebar />
                                    <Profile />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProfileLayout;