import { AsyncRouterContents } from 'app/common/components/route';
import Main from 'app/components/main';
import { IntlStore } from 'common/data';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { HashRouter } from 'react-router-dom';

export interface Props {

}

interface InternalProps {
  intl: IntlStore;
}

interface State {
}

@inject('intl') @observer
class Component extends React.Component<Props & InternalProps, State> {
  render() {
    return (
      <IntlProvider locale={this.props.intl.language} messages={this.props.intl.messages}>
        <HashRouter>
          <Main routerContents={<AsyncRouterContents/>}/>
        </HashRouter>
      </IntlProvider>
    );
  }
}

export default Component as React.ComponentClass<Props>;