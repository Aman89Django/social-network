import React, {useEffect, useState} from "react";


const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);


    // componentDidUpdate(prevProps, prevState) {
    //     if(prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }


    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return <div>
        Status:
        {!editMode ?
            <div><span onDoubleClick={activateEditMode}>{status || 'NO status'}</span></div>
            : <div><input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status}/></div>}
    </div>


};


export default ProfileStatusWithHooks;