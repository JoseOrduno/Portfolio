import React from 'react';
import { Image } from 'react-bootstrap';
import logo192 from '../pictures/jose.orduno.jpg';

const ProfilePhoto = () => (
  <Image
    src={logo192}
    roundedCircle
    className="img-fluid "
    style={{ height: '80%' }}
  />
);

export default ProfilePhoto;
