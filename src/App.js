import "./App.css";


function App() {
  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 font-sans text-gray-800">
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-md p-4 flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#profile" className="hover:underline">Profile</a></li>
            <li><a href="#academics" className="hover:underline">Academics</a></li>
            <li><a href="#skills" className="hover:underline">Skills</a></li>
            <li><a href="#extras" className="hover:underline">Extras</a></li>
          </ul>
        </nav>
      </header>
  
      <main className="p-6">
       <section id="profile" className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-purple-100">
          <h2 className="text-xl font-semibold mb-4 text-purple-700">Profile</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* <img src="https://via.placeholder.com/120" alt="" className="rounded-full w-28 h-28 border-4 border-purple-300" /> */}
            <div>
              <p className="text-lg font-medium">Divyanshu Saini</p>
              <p>A passionate developer with a background in BCA and MCA.</p>
              <p>Email: divyanshu@example.com</p>
              <p>LinkedIn: linkedin.com/in/divyanshusaini</p>
            </div>
          </div>
        </section>
        

        <section id="academics" className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-blue-100">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Academics & Experience</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Completed BCA and MCA from IFTM University</li>
            <li>StudyNotion Frontend – Educational platform UI built in React.js</li>
            <li>Shopping Cart App – Built using React.js and Tailwind CSS</li>
            <li> BigInt(BIG INTEGERS) in C++ (Algorithm Design)</li>
          </ul>
        </section>

        <section id="skills" className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-pink-100">
          <h2 className="text-xl font-semibold mb-4 text-pink-700">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {['React.js', 'Tailwind CSS', 'C++', 'HTML', 'CSS', 'JavaScript', 'MongoDB', 'Node.js', 'Express.js'].map(skill => (
              <span key={skill} className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm shadow-sm">{skill}</span>
            ))}
          </div>
        </section>

        <section id="extras" className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Extras</h2>
          <p><strong>Goals:</strong> Become a Software Development Engineer </p>
          <p><strong>Hobbies:</strong> Exploring new things</p>
          <p><strong>Certifications:</strong> Web Development training from CodeHelp</p>
        </section>
      </main>

      <footer className="text-center p-4 text-sm text-gray-600 bg-gradient-to-r from-blue-100 to-purple-100 rounded-t-2xl mt-6">© 2025 Divyanshu Saini</footer>
    </div>
  );
}

export default App;
