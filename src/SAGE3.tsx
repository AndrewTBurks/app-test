import React, { useState, useEffect } from 'react';
import { SAGE3App } from './SAGE3AppBase';
import { Window } from './Window';

import Image from './apps/Image';

console.log(Image);

interface AppProps {}

function App({}: AppProps) {
  return (
    <div className="bg-gray-400 text-white absolute inset-0">
      <Window
        position={{ left: 100, top: 200, width: 400, height: 300 }}
        // App={Image.App}
        // Title={Image.Title}
        // Controls={Image.Controls}
        {...Image}
        sageState={{}}
        data={{}}
      />
    </div>
  );
}

export default App;
