export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Dr. Janet Duffy</h1>
      <div className="max-w-2xl">
        <p className="text-xl mb-6">Ready to start your real estate journey? Get in touch today!</p>
        <div className="space-y-4">
          <p><strong>Phone:</strong> <a href="tel:+17022221964" className="text-primary-600">702-222-1964</a></p>
          <p><strong>Email:</strong> <a href="mailto:drduffy@bhhsnv.com" className="text-primary-600">drduffy@bhhsnv.com</a></p>
          <p><strong>Brokerage:</strong> Berkshire Hathaway Nevada Properties</p>
        </div>
      </div>
    </div>
  );
}
