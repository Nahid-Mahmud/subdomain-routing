export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-10">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Our Website</h1>
        <p className="text-xl text-gray-600 mt-4">A platform for Blogs and Forums</p>
      </header>

      {/* Main content */}
      <main className="w-full max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Blog Section */}
          <div className="flex flex-col items-center justify-center bg-blue-600 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-4">Visit Our Blog</h2>
            <p className="text-lg mb-6">Stay updated with the latest articles and posts.</p>
            <a
              href="http://blog.localhost:3000" // Change this URL for production
              className="inline-block bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-200"
            >
              Go to Blog
            </a>
          </div>

          {/* Forum Section */}
          <div className="flex flex-col items-center justify-center bg-green-600 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <h2 className="text-3xl font-semibold mb-4">Join Our Forum</h2>
            <p className="text-lg mb-6">Discuss topics and engage with the community.</p>
            <a
              href="http://forum.localhost:3000" // Change this URL for production
              className="inline-block bg-white text-green-600 font-semibold py-2 px-4 rounded-full hover:bg-green-100 transition duration-200"
            >
              Go to Forum
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Our Website | All Rights Reserved</p>
      </footer>
    </div>
  );
}
