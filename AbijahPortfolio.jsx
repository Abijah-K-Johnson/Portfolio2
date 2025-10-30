import React, { useState } from "react";
import {
  Menu,
  X,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Send,
  BookOpen,
  Code2,
  Trophy,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-gray-900">Abijah K Johnson</h1>

          <div className="hidden md:flex space-x-8">
            {["about", "education", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            {["about", "education", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section id="about" className="pt-24 flex flex-col items-center text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="max-w-2xl text-gray-600">
          Hi, I'm <span className="font-semibold">Abijah</span>, a Computer Science Engineering
          student passionate about coding, problem-solving, and building impactful projects.
        </p>
      </section>

      <section id="education" className="py-16 bg-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
          <BookOpen /> Education
        </h2>
        <p className="text-gray-600">B.E. Computer Science Engineering – 2nd Year</p>
      </section>

      <section id="skills" className="py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
          <Code2 /> Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {["C", "C++", "Java", "React", "Tailwind CSS", "DSA"].map((skill) => (
            <div key={skill} className="p-4 bg-white shadow rounded-lg">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-16 bg-white text-center px-6">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
          <Trophy /> Projects
        </h2>
        <p className="text-gray-600">Coming soon...</p>
      </section>

      <section id="contact" className="py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-2">
          <Mail /> Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-4 text-left">
          {["name", "email", "subject"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              className="p-3 border rounded-lg"
              required
            />
          ))}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows={4}
            className="p-3 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            <Send /> Send Message
          </button>
        </form>

        <div className="mt-8 flex justify-center gap-6">
          {[Github, Linkedin, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="text-gray-600 hover:text-blue-600">
              <Icon />
            </a>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-center py-6 mt-12">
        © {new Date().getFullYear()} Abijah K Johnson. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
