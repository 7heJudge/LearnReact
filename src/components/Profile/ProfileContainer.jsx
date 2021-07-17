import {Profile} from "./Profile";
import * as React from "react";
import {connect} from "react-redux";
import {setUserProfile, setUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = this.props.authorizedUserId;
        // if (!userId)this.props.history.push('/login');//If u stay on profilePage, and u logout. U will stay on this page.
        //Instead this, use hoc "withAuthRedirect"
        this.props.setUserProfile(userId);
        this.props.setUserStatus(userId);
    }

    render() {
       return (
           <div>
               <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
           </div>
       );
    };
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    };
};

export default compose(connect(mapStateToProps, {setUserProfile, setUserStatus, updateUserStatus}),
    withRouter, withAuthRedirect)(ProfileContainer);