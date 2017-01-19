import * as React from 'react';


interface Props {
  children: any,
}


export default class MainLayout extends React.Component<Props, null> {
  render() {
    return this.props.children;
  }
}