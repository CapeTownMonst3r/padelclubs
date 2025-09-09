import { useState } from "react";

export default function ImprovedHome() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    experience: [] as string[],
    heardAbout: "",
    other: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      experience: checked 
        ? [...prev.experience, name]
        : prev.experience.filter(item => item !== name)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-2">
            <div className="flex items-center">
              <img src="/padel-logo.svg" alt="Padel Logo" className="h-14 w-12 mr-3" />
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-700 bg-clip-text text-transparent">
                PadelClubs
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#what-is-padel" className="text-gray-700 hover:text-emerald-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-emerald-50">What is Padel?</a>
                <a href="#buy-courts" className="text-gray-700 hover:text-emerald-600 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-emerald-50">Partnership Opportunities</a>
                <a href="#register" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Register Interest</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-8">
              🚀 Australia's Padel Revolution Starts Here
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Australia's Home for{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Padel
              </span>
            </h1>
            <h2 className="text-2xl md:text-4xl text-gray-700 mb-8 font-light">
              The World's Fastest Growing Sport is Coming
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Experience the dynamic sport that's taking the world by storm. 
              <span className="font-semibold text-emerald-600"> Easy to learn, naturally social, and seriously addictive</span> - 
              padel is perfect for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <a href="#register" className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  REGISTER YOUR INTEREST
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a href="#what-is-padel" className="group border-2 border-emerald-600 text-emerald-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="flex items-center justify-center">
                  LEARN ABOUT PADEL
                  <svg className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
              </a>
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-emerald-600 font-semibold shadow-lg">
              🎾 Be first to know when we launch • 347+ already registered
            </div>
          </div>
        </div>
      </section>

      {/* What is Padel Section - Enhanced */}
      <section id="what-is-padel" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6">
              🎾 The Sport Everyone's Talking About
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">What is Padel?</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Padel is a dynamic racquet sport that{" "}
              <span className="font-bold text-emerald-600">combines the best of tennis and squash</span>. 
              Played on a smaller court surrounded by walls, it's fast, social, and accessible for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: "🎯",
                title: "Easy to Learn",
                description: "Smaller court and underarm serves mean you'll be playing competitive rallies from day one.",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                icon: "👥",
                title: "Naturally Social", 
                description: "Always played in doubles - perfect for meeting people and building friendships.",
                gradient: "from-teal-500 to-cyan-500"
              },
              {
                icon: "💪",
                title: "Great Exercise",
                description: "Combines cardio, agility, and coordination in one exciting workout.",
                gradient: "from-cyan-500 to-blue-500"
              },
              {
                icon: "🌟",
                title: "For Everyone",
                description: "From beginners to seasoned athletes - padel is inclusive for all ages and abilities.",
                gradient: "from-blue-500 to-indigo-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <div className={`h-1 w-12 mx-auto mt-6 bg-gradient-to-r ${feature.gradient} rounded-full`}></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Australia Section - Enhanced */}
      <section id="why-australia" className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Why Padel is Perfect for Australia</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Padel fits perfectly with our sporting culture, social lifestyle, and love of community activities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌤️",
                title: "Weather-Proof",
                description: "Indoor courts mean year-round play, regardless of Perth's weather",
                stat: "365 days"
              },
              {
                icon: "🤝",
                title: "Social Culture",
                description: "Fits perfectly with our love of community sport and social connection",
                stat: "Always doubles"
              },
              {
                icon: "🎯",
                title: "Accessible Sport",
                description: "Easier to learn than tennis, more social than squash",
                stat: "Learn in 1 session"
              },
              {
                icon: "🌍",
                title: "Global Growth",
                description: "Join 25+ million players worldwide in the fastest growing sport",
                stat: "25M+ players"
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Friendly",
                description: "All generations can play together - from kids to grandparents",
                stat: "All ages"
              },
              {
                icon: "💼",
                title: "Business Ready",
                description: "Perfect for corporate wellness and team building activities",
                stat: "Team sport"
              }
            ].map((benefit, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                  <div className="text-right">
                    <div className="text-emerald-600 font-bold text-lg">{benefit.stat}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with Us Section - Updated */}
      <section id="buy-courts" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6">
              🤝 Partnership Opportunities
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Partner With Us</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your unused space into a thriving padel destination. We handle everything while you earn revenue from your existing facility.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Turn Unused Space Into Revenue</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Have underutilised space at your tennis club, bowling alley, or sports facility? We'll transform it into Australia's hottest new sport while you earn consistent income.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">We Handle Everything</h4>
                    <p className="text-gray-600">Court installation, equipment, marketing, operations, and customer service - completely hands-off for you.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Guaranteed Revenue</h4>
                    <p className="text-gray-600">Choose from lease payments or revenue sharing models. Earn from day one with no operational risk.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Enhance Your Facility</h4>
                    <p className="text-gray-600">Attract new members, increase foot traffic, and offer the latest trending sport without any investment.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Partnership Models</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Fixed Lease:</span>
                    <span className="text-emerald-600 font-bold">$X - $Y per month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Revenue Share:</span>
                    <span className="text-emerald-600 font-bold">X% - Y% of gross revenue</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Hybrid Model:</span>
                    <span className="text-emerald-600 font-bold">Base rent + Z% share</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Perfect Partners</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-3xl mb-2">🎾</div>
                    <p className="font-semibold text-gray-900">Tennis Clubs</p>
                    <p className="text-sm text-gray-600">Unused indoor courts or space</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-3xl mb-2">🎳</div>
                    <p className="font-semibold text-gray-900">Bowling Alleys</p>
                    <p className="text-sm text-gray-600">Large indoor areas</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-3xl mb-2">🏋️</div>
                    <p className="font-semibold text-gray-900">Sports Centres</p>
                    <p className="text-sm text-gray-600">Multipurpose halls</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <div className="text-3xl mb-2">🏢</div>
                    <p className="font-semibold text-gray-900">Community Centres</p>
                    <p className="text-sm text-gray-600">Underutilised spaces</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Space Requirements</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700"><span className="font-semibold">Minimum area:</span> 11m x 21m (for single court)</p>
                  <p className="text-gray-700"><span className="font-semibold">Height clearance:</span> 6+ metres</p>
                  <p className="text-gray-700"><span className="font-semibold">Surface:</span> Hard floor (we install court surface)</p>
                  <p className="text-gray-700"><span className="font-semibold">Access:</span> Public accessibility preferred</p>
                  <p className="text-gray-700"><span className="font-semibold">Parking:</span> Customer parking available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">How Our Partnership Works</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Site Assessment</h4>
                <p className="text-sm text-gray-600">We visit your facility and assess space suitability at no cost</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Partnership Agreement</h4>
                <p className="text-sm text-gray-600">Negotiate terms that work for both parties - lease or revenue share</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Court Installation</h4>
                <p className="text-sm text-gray-600">We handle all construction, permits, and setup - minimal disruption</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">4</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Operations Begin</h4>
                <p className="text-sm text-gray-600">We operate the courts and you receive your agreed payments</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-white border-2 border-emerald-200 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">What We Provide</h4>
              <ul className="space-y-3">
                {[
                  "Complete court design and installation",
                  "All equipment and maintenance",
                  "Marketing and customer acquisition", 
                  "Booking system and customer service",
                  "Coaching programs and events",
                  "Insurance and liability coverage",
                  "Regular facility upgrades"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">What You Gain</h4>
              <ul className="space-y-3">
                {[
                  "Consistent monthly revenue stream",
                  "Increased foot traffic to your facility",
                  "New member attraction opportunities",
                  "Enhanced facility value and appeal",
                  "No operational headaches or costs",
                  "Association with trending sport",
                  "Potential for facility expansion"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Partner?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your unused space into a profitable padel destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                SCHEDULE SITE VISIT
              </a>
              <a href="#contact" className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200">
                PARTNERSHIP ENQUIRY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section - Enhanced */}
      <section id="register" className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6">
              🚀 Join the Revolution
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Register Your Interest</h2>
            <h3 className="text-2xl md:text-3xl text-gray-700 mb-4">Be First to Know</h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Get priority updates about our club openings, events, and programmes. Join 347+ early supporters.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-white rounded-2xl p-12 shadow-xl text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h3 className="text-3xl font-bold text-emerald-600 mb-4">Thank You!</h3>
              <p className="text-lg text-gray-600">
                Welcome to the padel revolution! We'll be in touch with exclusive updates soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="0400 000 000"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-3">Location/Suburb</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="Perth, Sydney, Melbourne..."
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-4">Tell us about yourself:</label>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Complete beginner to padel",
                    "Some racquet sport experience", 
                    "Interested in social play",
                    "Interested in competitive play",
                    "Looking for family activities",
                    "Corporate/business interest"
                  ].map((option) => (
                    <label key={option} className="flex items-center p-3 border-2 border-gray-200 rounded-xl hover:border-emerald-300 transition-colors cursor-pointer">
                      <input
                        type="checkbox"
                        name={option}
                        checked={formData.experience.includes(option)}
                        onChange={handleCheckboxChange}
                        className="mr-3 text-emerald-600 focus:ring-emerald-500 rounded"
                      />
                      <span className="text-sm text-gray-700 font-medium">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-4">How did you hear about padel?</label>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {[
                    "Social media",
                    "Friend/family",
                    "Online search",
                    "Tennis/sports club"
                  ].map((option) => (
                    <label key={option} className="flex items-center p-3 border-2 border-gray-200 rounded-xl hover:border-emerald-300 transition-colors cursor-pointer">
                      <input
                        type="radio"
                        name="heardAbout"
                        value={option}
                        checked={formData.heardAbout === option}
                        onChange={handleInputChange}
                        className="mr-3 text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-sm text-gray-700 font-medium">{option}</span>
                    </label>
                  ))}
                </div>
                <label className="flex items-center p-3 border-2 border-gray-200 rounded-xl hover:border-emerald-300 transition-colors cursor-pointer">
                  <input
                    type="radio"
                    name="heardAbout"
                    value="other"
                    checked={formData.heardAbout === "other"}
                    onChange={handleInputChange}
                    className="mr-3 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-700 font-medium">Other:</span>
                </label>
                {formData.heardAbout === "other" && (
                  <input
                    type="text"
                    name="other"
                    value={formData.other}
                    onChange={handleInputChange}
                    placeholder="Please specify"
                    className="w-full mt-4 px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  />
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-4 rounded-xl text-lg font-bold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <span className="flex items-center justify-center">
                    REGISTER MY INTEREST
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
                <p className="text-sm text-gray-500 mt-6">We respect your privacy. Updates only, no spam.</p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about padel</p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "I've never heard of padel - is it new?",
                a: "Padel has millions of players worldwide but is just arriving in Australia. It's the perfect time to get involved and be part of the foundation!"
              },
              {
                q: "Do I need to be fit or athletic?",
                a: "Not at all! Padel is designed to be accessible for everyone. The smaller court and team format make it easy to start, regardless of fitness level."
              },
              {
                q: "Is it expensive to play?",
                a: "Padel is designed to be accessible. Equipment can be hired, and the social format means you're sharing court costs with three other players."
              },
              {
                q: "When will clubs actually open?",
                a: "We'll keep registered members updated on opening timelines and locations as they're confirmed. Perth locations are planned for early 2025."
              },
              {
                q: "Can kids play padel?",
                a: "Absolutely! Padel is perfect for families and we'll offer junior programmes. The sport is safe, fun, and great for developing coordination."
              },
              {
                q: "How is padel different from tennis?",
                a: "Padel uses walls, is always doubles, has underarm serves, and uses a smaller court. It's easier to learn and more social than tennis."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Q: {faq.q}</h3>
                <p className="text-gray-700 leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact" className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Get Involved</h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              <strong>Be part of the movement.</strong> Padel is growing globally, and now it's Australia's turn.
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Whether you're interested in playing, partnering with us, or hosting padel at your venue - we'd love to hear from you.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
              <div className="group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📧</div>
                <p className="font-bold text-gray-900 text-lg">Email</p>
                <p className="text-emerald-600 font-semibold">hello@padelclubs.com.au</p>
              </div>
              <div className="group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
                <p className="font-bold text-gray-900 text-lg">Follow</p>
                <p className="text-emerald-600 font-semibold">@padelclubsau</p>
              </div>
              <div className="group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌐</div>
                <p className="font-bold text-gray-900 text-lg">Web</p>
                <p className="text-emerald-600 font-semibold">padelclubs.com.au</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@padelclubs.com.au" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Partnership Enquiries
              </a>
              <a href="mailto:hello@padelclubs.com.au" className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-200">
                Court Installation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <img src="/padel-logo.svg" alt="Padel Logo" className="h-16 w-16 mr-4" />
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-800 to-emerald-700 bg-clip-text text-transparent">
                Padel Clubs
              </div>
            </div>
            <p className="text-xl text-gray-300 mb-4">Your Home for Padel in Australia</p>
            <p className="text-gray-400 mb-12 text-lg">The world's fastest growing Padel clubs is coming to Australia</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a href="#register" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">Register Interest</a>
              <a href="#contact" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">Partnerships</a>
              <a href="#buy-courts" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">Buy Courts</a>
              <a href="#contact" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">Contact</a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500 text-sm">© 2025 PadelClubs.com.au. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA - Enhanced */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a 
          href="#register" 
          className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-4 rounded-full shadow-2xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
        >
          <span className="flex items-center">
            📝 REGISTER
            <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}