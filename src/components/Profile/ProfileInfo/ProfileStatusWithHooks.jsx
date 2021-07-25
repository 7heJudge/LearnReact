import * as React from "react";
import {useState} from "react";
import {useEffect} from "react";

const ProfileStatusWithHooks = (props) => {
    const [status, setStatus] = useState(props.status);
    const [editMode, setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true);
    };

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };
    return (
        <div>
            {!editMode &&
            <span onDoubleClick={activateEditMode}>{status || "No status"}</span>
            }
            {editMode &&
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
            }
        </div>
    );
};

export default ProfileStatusWithHooks;