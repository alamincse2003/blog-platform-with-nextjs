"use client";

export default function Error({ error, reset }) {
  return (
    <div className="p-10 text-center text-red-500">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try Again
      </button>
    </div>
  );
}
