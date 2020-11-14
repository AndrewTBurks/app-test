import React from 'react';

const meta = {
  name: 'Image Viewer App',
};

// const Title = () => <>Image Viewer</>;

const Controls = () => (
  <>
    <button className="mx-1 p-1 bg-teal-200 rounded-md text-gray-900">
      button abc
    </button>
    <button className="mx-1 p-1 bg-teal-200 rounded-md text-gray-900">
      button 2
    </button>
  </>
);

const App = React.lazy(() => import('./content'));

export default {
  App,
  // Title,
  Controls,

  __meta__: meta,
};
