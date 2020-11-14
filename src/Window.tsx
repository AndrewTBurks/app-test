import React from 'react';

interface WindowProps extends AppProps {
  App: React.ComponentType<AppProps>;
  Controls?: React.ComponentType<AppProps>;
  Title?: React.ComponentType<AppProps>;
}

export class Window extends React.Component<
  WindowProps,
  { error: Error | null; count: number }
> {
  constructor(props: WindowProps) {
    super(props);

    this.state = {
      error: null,
      count: 0,
    };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    const {
      App,
      Controls = () => null,
      Title = () => null,
      ...props
    } = this.props;

    return (
      <div
        className="p-8 bg-white text-black rounded-b-lg shadow-lg absolute"
        style={{ ...props.position }}
      >
        <AppTitlebar>
          <Title {...props} />
        </AppTitlebar>
        <React.Suspense fallback={'LOADING...'}>
          <App {...props} />
        </React.Suspense>
        <AppControls>
          <Controls {...props} />
        </AppControls>
      </div>
    );
  }
}

function AppTitlebar(props: React.PropsWithChildren<{}>) {
  return (
    <div
      className="absolute bg-gray-800 text-white px-2 py-1 rounded-t-md"
      style={{ width: '100%', bottom: '100%', left: 0 }}
    >
      {props.children}
    </div>
  );
}

function AppControls(props: React.PropsWithChildren<{}>) {
  return (
    <div
      className="absolute bg-white text-gray-700 p-2 shadow-md rounded-md"
      style={{
        top: 'calc(100% + 10px)',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {props.children}
    </div>
  );
}
