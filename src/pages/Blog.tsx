const Blog = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-playfair mb-12 text-center">Blog</h1>
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
              src="/lovable-uploads/05d877b3-4eb1-4689-8da1-9dc001a68117.png" 
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