import React from 'react';

export class SAGE3App extends React.Component<
  AppProps,
  { error: Error | null; count: number }
> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      error: null,
      count: 0,
    };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  static Controls(props: AppProps) {
    return <div>App Controls</div>;
  }

  static Title(props: AppProps) {
    return <div>App Title</div>;
  }

  render() {
    console.log('App Render', this.props);
    if (this.state.error) {
      return (
        <div className="absolute inset-0 bg-red-100 text-red-900">ERROR</div>
      );
    }

    return <div>App Content</div>;
  }
}
