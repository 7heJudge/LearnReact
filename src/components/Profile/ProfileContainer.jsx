import {Profile} from "./Profile";
import * as React from "react";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";

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
        profile: state.profilePage.profile
    };
};

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);