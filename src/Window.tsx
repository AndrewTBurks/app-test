import React from 'react';

interface WindowProps extends AppProps {
  App: React.ComponentType<AppProps>;
  Controls?: React.ComponentType<AppProps>;
  Title?: React.ComponentType<AppProps>;
  __meta__: any;
}

export class Window extends React.Component<
  WindowProps,
  { error: Error | null }
> {
  constructor(props: WindowProps) {
    super(props);

    this.state = {
      error: null,
      // count: 0,
    };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error.name);
    return { error };
  }

  render() {
    const {
      App,
      Controls = () => null,
      Title = () => this.props.__meta__.name,
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
        {this.state.error ? (
          <div className="absolute inset-0 bg-red-100 text-red-900 text-xl items-center justify-center flex">
            ERROR: {this.state.error.name}
          </div>
        ) : (
          <React.Suspense fallback={'LOADING...'}>
            <App {...props} />
          </React.Suspense>
        )}
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
