import React from 'react';
import { Face, Eyes, Eye, Mouth } from './styled';

const Avatar = React.memo(() => {
  return <Face>
      <Eyes>
        <Eye />
        <Eye />
      </Eyes>
      <Mouth />
    </Face>
});

export default Avatar;
