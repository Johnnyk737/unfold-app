import * as React from 'react'
import './styles/style.less'

export class Sidebar extends React.Component {

  constructor(props: any) {
    super(props)
  }

  // <function name> = (arg: type): return type
  test = (num: number): number => {
    return num*6
  }

  render() {
    return (
      <div className='border sidebar'>
        Sidebar
        {this.test(5)}
      </div>
    )
  }
}
