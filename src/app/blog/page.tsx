import Link from "next/link";

export default function BlogHomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
      {/* Welcome message */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to the Blog</h1>
        <p className="text-xl text-gray-600 mt-4">Stay tuned for upcoming posts!</p>
      </header>

      {/* Link to the Home page */}
      <main className="text-center">
        <Link href="http://localhost:3000" passHref>
          <button className="px-6 py-3 mt-6 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-800 transition-colors">
            Go to Home Page
          </button>
        </Link>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()}| All Rights Reserved</p>
      </footer>
    </div>
  );
}
