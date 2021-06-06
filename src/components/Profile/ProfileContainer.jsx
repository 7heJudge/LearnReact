import {Profile} from "./Profile";
import * as React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 17399;
        this.props.setUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
       return (
           <div>
               <Profile {...this.props} profile={this.props.profile} />
           </div>
       );
    };
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    };
};

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);