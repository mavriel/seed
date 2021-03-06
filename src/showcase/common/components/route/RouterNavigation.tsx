import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Props {

}

interface InternalProps {

}

interface State {
}

class Component extends React.Component<Props & InternalProps, State> {
  render() {
    return [
      <Link to="/showcase">Home</Link>,
      <Link to="/showcase/sample">Sample</Link>,
    ];
  }
}

export default Component as React.ComponentClass<Props>;