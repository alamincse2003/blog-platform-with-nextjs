import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "My Blog Platform",
  description: "A simple blogging platform built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="font-bold text-xl">
              <Link className="cursor-pointer" href="/">
                BlogPlatform
              </Link>
            </h1>
            <ul className="flex space-x-6">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* Main Content */}
        <main className="flex-grow container mx-auto">{children}</main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white p-4 text-center">
          © {new Date().getFullYear()} BlogPlatform. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
