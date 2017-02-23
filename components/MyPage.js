import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export default class MyPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/developit/preact')
    const json = await res.json()
    console.log('json', json);
    return { stars: json.stargazers_count }
  }

  render () {
    return (
      <div>
        <p>Preact has {this.props.stars} ⭐️</p>
        <Link href='/index'><a>I bet next has more stars (?)</a></Link>
      </div>
    )
  }
}
