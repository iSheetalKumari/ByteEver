const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold animate-fadeIn">Welcome to MySQL Workbench</h1>
      <p className="mt-4 text-lg opacity-90">
        Design, manage, and interact with your MySQL databases effortlessly.
      </p>
      <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-lg hover:bg-indigo-100 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Home;
