const blogs = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description: "Learn the basics of Next.js",
  },
  {
    id: 2,
    title: "Why Tailwind CSS?",
    description: "Advantages of using Tailwind CSS in projects",
  },
];

export default function Blogs() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-6">Blogs</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-bold">{blog.title}</h2>
            <p className="text-gray-600">{blog.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
