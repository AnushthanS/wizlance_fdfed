const Error = () => {
  return (
    <div className="min-h-screen flex mt-10 justify-center text-gray-900">
      <div className="p-8 rounded-lg">
        <h2 className="text-6xl  mb-4">404 -Not Found</h2>
        <p className="text-xl mb-4 text-gray-500">
          Oops! The page you are looking for does not exist.
          <p className="text-md ">Please check the URL and try again.</p>
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-block px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Error;
