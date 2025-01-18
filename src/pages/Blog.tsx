const Blog = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-playfair mb-12 text-center">Blog</h1>
        <article className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-playfair mb-2">Mats & Liza getting started programming</h2>
          <time className="text-sm text-gray-500 mb-4 block">January 18th, 2024</time>
          <p className="text-lg">
            Today we built an embryo of something for the wedding. We promise that the domain won't change.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;