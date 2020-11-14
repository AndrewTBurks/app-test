import React from 'react';

export default function ImageViewer(props: any) {
  const [willThrow, setWillThrow] = React.useState(false);

  if (willThrow) {
    throw new Error('UH OH!!!!');
  }

  return (
    <div>
      <img src="https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?ixid=2yJhcHBfaWQiOjEyMDd9&fm=jpg&fit=crop&w=1080&q=80&fit=max" />
      <button onClick={() => setWillThrow(true)}>throw</button>
    </div>
  );
}
