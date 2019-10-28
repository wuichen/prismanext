import Page from '../../components/page'
import Layout from '../../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} title="Layout and Styling">
        <h1 className="display-2">Layout</h1>
        <p className="lead">
          This project uses both a custom Page class and a Layout component.
        </p>
        <h2 className="mt-3">Page Class</h2>
        <p>
          Most Pages in this project extend from the Page class
          in <a href="https://github.com/iaincollins/nextjs-starter/blob/master/components/page.js">components/page.js</a>,
          which extends from <span className="font-weight-bold">React.Component</span>.
        </p>

      </Layout>
    )
  }
}
