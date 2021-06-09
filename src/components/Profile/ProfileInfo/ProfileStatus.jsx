import * as React from "react";

class ProfileStatus extends React.Component {
    state = {
      editMode: false,
    };

    activateEditMode = () => {
        this.setState({
           editMode: true
        });
    };

    deactivateEditMode() {
        this.setState({
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status ? this.props.status : 'default'}</span>
                }
                {this.state.editMode &&
                <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status ? this.props.status : 'default'}/>
                }
            </div>
        );
    }
};

export default ProfileStatus;