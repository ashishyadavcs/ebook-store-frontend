'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <h1 className="text-3xl font-bold text-red-700">Application Error</h1>
          <p>{error.message}</p>
          <button
            onClick={reset}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
