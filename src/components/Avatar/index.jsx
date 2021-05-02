import React from 'react';

import { generateAvatarFromHash } from 'utils/helpers';

import './Avatar.scss';

const Avatar = ({ user }) => {
  if (user?.avatar) {
    return (
      <img
        src={user.avatar}
        alt={`Avatar ${user.fullname}`}
        className="avatar"
      />
    );
  } else if (user !== null) {
    const { color, colorLighten } = generateAvatarFromHash(user._id);
    const firstChar = user.fullname[0].toUpperCase();
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
        }}
        className="avatar avatar--symbol"
      >
        {firstChar}
      </div>
    );
  } else {
    return null;
  }
};

export default Avatar;
