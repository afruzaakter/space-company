import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';


import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import Profile from './Profile';

const MyProfile = () => {
    const [profileUser, setprofileUser] = useState([]);
   

    useEffect(() => {
        fetch('http://localhost:5000/profile')
            .then(res => res.json())
            .then(data => setprofileUser(data))
            
    }, []);

    return (
       <div>
           {
               profileUser?.map(profile =><Profile
               key={profile._id}
               profile = {profile}
               ></Profile>)
           }
       </div>
    );
};

export default MyProfile;