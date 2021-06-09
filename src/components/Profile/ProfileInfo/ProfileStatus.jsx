import * as React from "react";

class ProfileStatus extends React.Component {
    state = {
      editMode: false,
        status: "Hey BOO!!!"
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
                <span onDoubleClick={this.activateEditMode.bind(this)}>{this.state.status}</span>
                }
                {this.state.editMode &&
                <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}/>
                }
            </div>
        );
    }
};

export default ProfileStatus;