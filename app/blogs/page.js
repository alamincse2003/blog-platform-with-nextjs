"use client";
import Link from "next/link";
import { blogs } from "./data";

export default function Blogs() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-6">Blogs</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
            <Link
              className="text-blue-500 mt-2 inline-block"
              href={`/blogs/${blog.id}`}
            >
              Read More
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
