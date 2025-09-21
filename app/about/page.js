export const metadata = {
  title: "About | Blog Platform",
  description: "Learn more about our blogging platform.",
};
export default function About() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold mb-4">About Us</h1>
      <p>
        This is a blogging platform where you can read and share blogs. Built
        with Next.js and Tailwind CSS.
      </p>
    </div>
  );
}
