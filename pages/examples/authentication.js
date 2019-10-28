import Page from '../../components/page'
import Layout from '../../components/layout'

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-2">Authentication</h1>
        <p className="lead">
          Authentication in this project is handled by the <a href="https://www.npmjs.com/package/next-auth">NextAuth</a> library.
        </p>

        <p>
          Combined with &lt;Link&gt; preloading, this allows pages to rendered extremely
          quickly client side, even when signed in. The caching of session
          data can be be disabled by setting <span className="font-weight-bold">sessionRevalidateAge</span> to 0 in <span className="font-weight-bold">next-auth.functions.js</span>.
          By default session data is cached for 60 seconds before it revalidates.
        </p>
      </Layout>
    )
  }
}
