import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col p-4 max-w-3xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline">
          ← Back to Battery Check
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
          <p>When you use our Battery Life Check tool, we may collect the following information:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Device information (battery status, browser type, device type)</li>
            <li>Usage data (how you interact with our Service)</li>
            <li>IP address and location data</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
          <p>We use the collected information for various purposes:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To serve relevant advertisements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Advertising</h2>
          <p>
            We use Google AdSense to display advertisements on our Service. Google AdSense uses cookies to serve ads
            based on your prior visits to our website or other websites. Google's use of advertising cookies enables it
            and its partners to serve ads to you based on your visit to our Service and/or other websites on the
            Internet.
          </p>
          <p className="mt-2">
            You may opt out of personalized advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google Ads Settings
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Cookies</h2>
          <p>
            Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These
            are sent to your browser from the websites that you visit and are stored on your device.
          </p>
          <p className="mt-2">
            Our Service uses these cookies to collect information and improve our Service. You have the option to either
            accept or refuse these cookies and know when a cookie is being sent to your device.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet
            or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
            protect your personal data, we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Third-Party Services</h2>
          <p>
            Our Service may contain links to other sites that are not operated by us. If you click on a third-party
            link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy
            of every site you visit.
          </p>
          <p className="mt-2">
            We have no control over and assume no responsibility for the content, privacy policies, or practices of any
            third-party sites or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Children's Privacy</h2>
          <p>
            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
            information from children under 13. If you are a parent or guardian and you are aware that your child has
            provided us with personal data, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at
            privacy@batterylifecheck.example.com.
          </p>
        </section>
      </div>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>Last updated: March 6, 2025</p>
      </footer>
    </main>
  )
}

