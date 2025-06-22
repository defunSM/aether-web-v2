export default function Home() {
  return (
    <>
      {/* Header Section */}
      <header className="bg-white shadow-sm py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L16.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.455L14.25 6l1.035-.259a3.375 3.375 0 0 0 2.455-2.455L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.455L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.455 2.455ZM19.5 17.25v-.007875a.75.75 0 0 0-.75-.75H16.5a.75.75 0 0 0-.75.75v.007875a.75.75 0 0 0 .75.75h2.25a.75.75 0 0 0 .75-.75Z" />
            </svg>
            <a href="#" className="text-2xl font-bold text-gray-900">Aether AI Assistant</a>
          </div>
          <nav className="space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-700 px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition duration-300">Add to Chrome</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-4 py-2 hover:bg-gray-100 rounded-lg transition duration-300">Pricing</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-4 sm:px-6 lg:px-8 text-center rounded-b-3xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            Aether AI Assistant
          </h1>
          <p className="text-xl sm:text-2xl mb-8 opacity-90">
            Your intelligent browser companion that enhances your web experience with AI-powered assistance
          </p>
          <a href="#" className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Add to Chrome
          </a>
        </div>
      </section>

      {/* See It In Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">See It In Action</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Experience the power of Aether AI Assistant right in your browser. Easily interact with advanced AI models, adjust parameters like temperature and max tokens, and get instant, context-aware answers to your questions—all from a simple, intuitive interface.
            </p>
            <ul className="space-y-4 text-lg text-gray-700">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Ask questions and get real-time answers</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Choose your preferred AI model</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Customize response settings</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6 text-green-500 flex-shrink-0 mt-1 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span>Seamless integration with your browsing workflow</span>
              </li>
            </ul>
          </div>
          {/* Placeholder for a screenshot or illustration */}
          <div className="bg-gray-100 rounded-xl shadow-xl p-8 flex items-center justify-center min-h-[300px] overflow-hidden">
            <img src="aether.gif" alt="Aether AI Assistant Screenshot" className="rounded-lg w-full h-auto object-cover max-w-full" />
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L16.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.455L14.25 6l1.035-.259a3.375 3.375 0 0 0 2.455-2.455L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.455L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.455 2.455ZM19.5 17.25v-.007875a.75.75 0 0 0-.75-.75H16.5a.75.75 0 0 0-.75.75v.007875a.75.75 0 0 0 .75.75h2.25a.75.75 0 0 0 .75-.75Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Smart Assistance</h3>
              <p className="text-gray-700">Get instant AI-powered help while browsing, writing, and researching</p>
            </div>
            {/* Feature Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-indigo-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.17.992c.07.413.29.79.652 1.046 1.109.762 2.128 1.487 2.652 1.843.344.234.625.565.757.965l.189.664c.088.397.017.809-.163 1.139-.54.98-1.54 1.913-2.652 2.652-.3.207-.55.485-.694.819l-.094.269c-.047.135-.152.247-.292.316l-.094.045c-.135.06-.29.06-.43 0l-.094-.045c-.14-.069-.245-.181-.292-.316l-.094-.269c-.144-.334-.394-.612-.694-.819-1.112-.739-2.112-1.672-2.652-2.652-.18-.33-.251-.742-.163-1.139l.189-.664c.132-.4.413-.73.757-.965.534-.356 1.553-1.081 2.652-1.843.362-.256.582-.633.652-1.046l.17-.992Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Customizable</h3>
              <p className="text-gray-700">Tailor the AI assistant to your needs with customizable settings and preferences</p>
            </div>
            {/* Feature Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
              <div className="flex justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-purple-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.413 1.353L5.438 15 7.5 18.75h9l2.062-3.75-3.899-6.83C15.112 8.878 14.851 8.52 14.851 8.125V3.104m0 0h-4.102m0 0a2.25 2.25 0 0 0 1.944 2.25h.944M11.5 7.75h.007875m9.75 1.5c.818.384 1.544 1.09 1.965 1.996l.3 1.341c.264 1.182.025 2.373-.668 3.324a9.764 9.764 0 0 1-1.357 1.638 9.953 9.953 0 0 1-1.246 1.047c-.77.575-1.586.995-2.457 1.228a1.687 1.687 0 0 0-1.044.252 1.687 1.687 0 0 1-1.044.252 1.687 1.687 0 0 0-1.044.252c-.87.233-1.687.653-2.457 1.228A9.953 9.953 0 0 1 5.3 20.311a9.765 9.765 0 0 1-1.357-1.638c-.693-.95-.932-2.142-.668-3.324l.3-1.341c.421-.906 1.147-1.612 1.965-1.996L12 17.25V5.55" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Privacy First</h3>
              <p className="text-gray-700">Your data stays private with our secure and encrypted processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl shadow-md">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white text-3xl font-bold rounded-full mb-6 shadow-md">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Install</h3>
              <p className="text-gray-700">Add Aether to your browser in seconds</p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl shadow-md">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white text-3xl font-bold rounded-full mb-6 shadow-md">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Configure</h3>
              <p className="text-gray-700">Set up your preferences and settings</p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl shadow-md">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white text-3xl font-bold rounded-full mb-6 shadow-md">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse</h3>
              <p className="text-gray-700">Use Aether while you browse the web</p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-xl shadow-md">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white text-3xl font-bold rounded-full mb-6 shadow-md">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhance</h3>
              <p className="text-gray-700">Get AI assistance whenever you need it</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action / Waitlist Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-4 sm:px-6 lg:px-8 text-center rounded-t-3xl">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Enhance Your Browsing?</h2>
          <p className="text-xl mb-8 opacity-90">Join the waitlist for the Aether browser extension</p>
          <button className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105 mb-10">
            Get Notified Today
          </button>

          {/* Waitlist Form */}
          <div className="bg-white text-gray-800 p-8 rounded-xl shadow-xl max-w-lg mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Join the Waitlist</h3>
            <p className="text-gray-700 mb-6">Be the first to know when the Aether browser extension is available! Enter your name and email below to get notified.</p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" required />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                Notify Me
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* About the Name "Aether" Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About the Name &quot;Aether&quot;</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            In ancient Greek mythology and science, &quot;Aether&quot; (also spelled &quot;Ether&quot;) was believed to be the pure essence that the gods breathed, filling the space where they lived and the upper sky. It represented the bright, glowing upper air and was thought to be the medium that enabled light and energy to travel. We chose this name to reflect our mission: bringing clarity, intelligence, and a touch of the extraordinary to your digital experience.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8 text-center rounded-t-3xl">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <a href="#top" className="inline-flex items-center text-gray-400 hover:text-white transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
              </svg>
              Go Back Up
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <p className="text-3xl font-bold text-white">Aether</p>
              <p className="text-gray-400">Your AI Browser Assistant</p>
            </div>
            <p className="text-gray-500 text-sm">&copy; 2025 Aether AI Assistant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
