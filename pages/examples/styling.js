import Page from '../../components/page'
import Layout from '../../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} title="Layout and Styling">
        <h1 className="display-2">Styling</h1>
        <h2>Live Reloading</h2>
        <p>
          When running a Next.js project in development mode changes to JavaScript, HTML and CSS are live reloaded, meaning any changes to pages are applied immediately without a browser refresh.
        </p>
        <h2>SCSS and Webpack</h2>
        <p>
          The file <a href="https://github.com/iaincollins/nextjs-starter/blob/master/css/index.scss">index.scss</a> imports <a href="https://getbootstrap.com/">Bootstrap</a> and <a href="https://ionicframework.com/docs/ionicons/">Ionicons</a> and defines additional global CSS.
        </p>

        <p>
          Alternatively, you also import assets into your project by copying them into the <a href="/static/example.html">/static</a> directory and serving them from there.
        </p>
      </Layout>
    )
  }
}
