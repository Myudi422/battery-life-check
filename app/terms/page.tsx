import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col p-4 max-w-3xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline">
          ← Back to Battery Check
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Battery Life Check tool ("Service"), you agree to be bound by these Terms and
            Conditions and all applicable laws and regulations. If you do not agree with any of these terms, you are
            prohibited from using or accessing this Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Use of Service</h2>
          <p>
            The Battery Life Check tool is designed to provide information about your device's battery status. The
            information provided is for reference purposes only and should not be considered as professional advice. We
            do not guarantee the accuracy of the battery information displayed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Advertisements</h2>
          <p>
            Our Service displays advertisements provided by third-party ad networks, including Google AdSense. By using
            our Service, you agree to view these advertisements. We are not responsible for the content of these
            advertisements.
          </p>
          <p className="mt-2">
            We comply with Google AdSense program policies and other applicable advertising guidelines. Advertisements
            are clearly labeled as such to distinguish them from our content.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Privacy</h2>
          <p>
            Your privacy is important to us. Please review our{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            to understand how we collect, use, and protect your information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Cookies</h2>
          <p>
            Our Service uses cookies to enhance user experience and to analyze our traffic. By using our Service, you
            consent to our use of cookies in accordance with our Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2>
          <p>
            In no event shall the Battery Life Check tool, its operators, or any related parties be liable for any
            damages (including, without limitation, damages for loss of data or profit, or due to business interruption)
            arising out of the use or inability to use the materials on the Service, even if we have been notified of
            the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any changes by updating the
            date at the bottom of this page. It is your responsibility to check these Terms periodically for changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at support@batterylifecheck.example.com.</p>
        </section>
      </div>

      <footer className="mt-12 text-center text-sm text-muted-foreground">
        <p>Last updated: March 6, 2025</p>
      </footer>
    </main>
  )
}

