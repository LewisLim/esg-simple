export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-xl text-green-700 mb-4">About This Website</h1>
        </div>

        {/* <div className="flex justify-center my-8">
          <ImageWithFallback
              src="https://images.unsplash.com/photo-1496016943515-7d33598c11e6?w=400"
              alt="Smiley face"
              className="w-32 h-32 rounded-full object-cover"
            />
        </div> */}

        {/* What You'll Find Here */}
        <section className="bg-white rounded-2xl p-6 mb-6">
          <h2 className="text-green-600 mb-6">You'll Find Here</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span className="text-gray-700">
                Learning resources on environmental topics
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span className="text-gray-700">
                Straightforward explanations and simpler wordings
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 mt-1">✓</span>
              <span className="text-gray-700">
                Tools and calculators to help you learn
              </span>
            </li>
          </ul>
        </section>

        {/* Mission */}
        <section className="bg-white rounded-2xl p-6 mb-6">
          <h2 className="text-green-600 mb-4">Mission</h2>
          <p className="text-gray-700">
            Make environmental learning easy, accurate and free for everyone
          </p>
        </section>

        {/* About the Author */}
        <section className="bg-white rounded-2xl p-6 mb-6">
          <h2 className="text-green-600 mb-6">About the Author</h2>
          <p className="text-gray-700 mb-6">
            Hey there, I'm George, and I built this site because environmental
            information online is often too complicated for most people to
            understand and apply. I try to keep everything straightforward and
            simple so that anyone can understand. However, there may not be a
            one size fits all version that caters to both adults and kids. So
            the kids version will come at a later time.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-center">
          <h2 className="text-white mb-4">Get in Touch?</h2>
          <div className="flex items-center justify-center gap-3 text-white">
            {/* <Mail className="w-5 h-5" /> */}
            <a
              href="mailto:hello@lookatgaia.com"
              className="hover:underline transition-all"
            >
              hello@lookatgaia.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
