const Blog = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-playfair mb-12 text-center">Blog</h1>

        <article className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-playfair mb-2">Made Liza+Mats app installable on iPhone/Android</h2>
          <time className="text-sm text-gray-500 mb-4 block">January 19th, 2024</time>
          <p className="text-lg mb-6">
            Today we completed a series of updates that makes the wedding event app installable on your Android/iPhone
            home screen. Please see setup instructions for{" "}
            <a
              href="https://github.com/okaziya/wedding/blob/main/docs/android.md"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Android here
            </a>{" "}
            and instructions for{" "}
            <a
              href="https://github.com/okaziya/wedding/blob/main/docs/apple.md"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              iPhone here
            </a>
            .
          </p>
        </article>

        <article className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-playfair mb-2">Mats & Liza getting started programming</h2>
          <time className="text-sm text-gray-500 mb-4 block">January 18th, 2024</time>
          <p className="text-lg mb-6">
            Today we built an embryo of something for the wedding. We promise that the domain won't change.
          </p>
          <div className="mt-4">
            <a
              href="https://okaziya.github.io/wedding/"
              className="text-blue-600 hover:text-blue-800 break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://okaziya.github.io/wedding/
            </a>
          </div>
          <div className="mt-6 flex justify-center">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent("https://okaziya.github.io/wedding/")}`}
              alt="QR Code to wedding website"
              className="w-48 h-48"
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog;
