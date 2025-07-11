import React from 'react'
import Heading from './Heading'

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML5", icon: "🌐", color: "from-accent5 to-accent8" },
      { name: "CSS3", icon: "🎨", color: "from-accent7 to-accent2" },
      { name: "JavaScript", icon: "⚡", color: "from-accent3 to-accent5" },
      { name: "TypeScript", icon: "📘", color: "from-accent7 to-accent" },
      { name: "React.js", icon: "⚛️", color: "from-accent7 to-accent6" },
      { name: "Next.js", icon: "🚀", color: "from-gray-600 to-gray-800" },
    ]
  },
  {
    title: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", icon: "🎯", color: "from-accent7 to-accent" },
      { name: "Bootstrap", icon: "🎪", color: "from-accent2 to-accent9" },
      { name: "Material-UI", icon: "🧩", color: "from-accent7 to-accent2" },
      { name: "Framer Motion", icon: "✨", color: "from-accent9 to-accent5" },
    ]
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Node.js", icon: "🟢", color: "from-accent4 to-accent10" },
      
      { name: "Sanity", icon: "🔒", color: "from-accent6 to-accent3" },
      { name: "Git & GitHub", icon: "📚", color: "from-accent5 to-accent8" },
    ]
  },
  {
    title: "AI & Emerging Tech",
    skills: [
      { name: "Agentic AI", icon: "🤖", color: "from-accent6 to-accent9", isNew: true },
      
      { name: "OpenAI API", icon: "🔮", color: "from-accent4 to-accent7" },
      { name: "OpenRouter API", icon: "🔮", color: "from-accent4 to-accent7" },
      
    ]
  }
];

function Skills() {
  return (
    <div id='skills' className='container pt-32 pb-20'>
      <Heading title='My Skills' />
      
      {/* Skills Grid */}
      <div className='grid md:grid-cols-2 gap-8 mt-16'>
        {skillCategories.map((category, categoryIndex) => (
          <div 
            key={category.title}
            data-aos="fade-up" 
            data-aos-delay={categoryIndex * 100}
            className="bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
          >
            <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-accent bg-clip-text text-transparent">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  data-aos="scale-in"
                  data-aos-delay={categoryIndex * 100 + skillIndex * 50}
                  className="group relative"
                >
                  <div className={`bg-gradient-to-r ${skill.color} p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer relative overflow-hidden`}>
                    {skill.isNew && (
                      <div className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                        NEW
                      </div>
                    )}
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <div className="text-white font-semibold text-sm">{skill.name}</div>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Technology Description */}
      <div className='mt-20' data-aos="fade-up" data-aos-delay="600">
        <div className="bg-gradient-dark rounded-2xl p-8 border border-accent/20">
          <h2 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent'>
            Technologies I Work With
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className='text-gray-300 text-lg leading-relaxed'>
                I am a <span className="text-accent font-semibold">Full Stack Developer</span> with expertise in modern web technologies. 
                My journey spans from frontend frameworks like React and Next.js to backend development with Node.js, 
                creating responsive and dynamic web applications that deliver exceptional user experiences.
              </p>
            </div>
            <div>
              <p className='text-gray-300 text-lg leading-relaxed'>
Recently, I've expanded my expertise into <span className="text-accent font-semibold">Agentic AI</span> and emerging technologies. 
I specialize in building intelligent applications using OpenAI APIs, LangChain, and machine learning concepts, 
combining traditional web development with cutting-edge AI capabilities.
              </p>
            </div>
          </div>
          
          {/* Skill Level Indicators */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-gray-400">Frontend Development</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-gradient-accent h-2 rounded-full animate-pulse-slow" style={{width: '95%'}}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">85%</div>
              <div className="text-gray-400">Backend Development</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-gradient-accent h-2 rounded-full animate-pulse-slow" style={{width: '85%'}}></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">75%</div>
              <div className="text-gray-400">AI & Agentic_AI</div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                <div className="bg-gradient-accent h-2 rounded-full animate-pulse-slow" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills