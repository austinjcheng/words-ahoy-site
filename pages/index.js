import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Words Ahoy!" />
        <p className="description">
          Privacy Policy

Thank you for using Words Ahoy!

Words Ahoy! is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information about you when you use our mobile application and the services provided through it.

Information We Do Not Collect

We do not collect any personal information from you when you use Words Ahoy!. We do not require you to provide any personal information to use the features of the app.

Information Collected by Third Parties

We do not allow any third-party services or SDKs (Software Development Kits) to collect data from our app.

Location Data

We do not collect or store any location data from your device.

Analytics

We do not use any analytics tools to track your usage of the app.

Children’s Privacy

Words Ahoy! is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take necessary actions.

Changes to This Privacy Policy

We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.

Contact Us

If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at austinjcheng@gmail.com.
        </p>
      </main>

      <Footer />
    </div>
  )
}
