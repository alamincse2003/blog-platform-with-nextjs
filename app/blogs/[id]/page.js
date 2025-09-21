import { blogs } from "../data";

export default function BlogDetails({ params }) {
  const blog = blogs.find((b) => b.id.toString() === params.id);

  if (!blog) {
    return <h1 className="p-10 text-red-500">Blog not found!</h1>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-6">{blog.description}</p>
      <div className="text-lg">{blog.content}</div>
    </div>
  );
}
