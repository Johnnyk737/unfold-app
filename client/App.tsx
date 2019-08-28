import * as React from 'react'
import { Sidebar } from './Sidebar'
import { Main } from './Main'

import './styles/style.less'

export interface AppProps { compiler: string; framework: string; }

export class App extends React.Component<AppProps, {}> {

  render() {
    return (
      <div>
        <Sidebar />
        <Main />
      </div>
    )
  }
}
