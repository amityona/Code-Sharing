import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';

const Home = () => {

    const [username, setUsername] = useState('');
    const [roomId, setRoomId] = useState('');
    const navigate = useNavigate();

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('Must Enter Id And userName');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const generateRoomID = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created room');
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };
    return (
        <div className="wrapperHome">
            <div className="wrapperMain">
                <img
                    className="homePageLogo"
                    src="/code-sync.png"
                    alt="code-sync-logo"
                />
                <h4 className="lblMain">Enter ROOM ID And UserName</h4>
                <div className="inputLb">
                    <input
                        value={roomId}
                        onKeyUp={handleInputEnter}
                        type="text"
                        className="inputBox"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                    />
                    <input
                        type="text"
                        className="inputBox"
                        placeholder="USERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join
                    </button>
                    <span className='createdWrapper'><a
                        onClick={generateRoomID}
                        href=""
                        className="newBTN"
                    >
                        Generate Unique Room ID
                    </a></span>
                </div>
            </div>
        </div>
    );
};

export default Home;
