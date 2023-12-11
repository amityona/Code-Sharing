import React from 'react';
import Avatar from 'react-avatar';

const Client = ({ username }) => {
    return (
        <div className="client">
            <Avatar size={50} round="14px" name={username} style={{ borderColor: "red" }} />
            <span className="userName">{username}</span>
        </div>
    );
};

export default Client;
