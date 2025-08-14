export default function Contact() {
  return (
    <div className="bg-white">
    <div className="bg-white py-16 lg:py-24 mx-auto max-w-[1300px]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Contact Form */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4 ">
              <h2 className="text-4xl lg:text-5xl font-semibold  textgreen">
                Feel Free To Contact Us
              </h2>
              {/* <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Tempor erat elit rebum et clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo erat amet
              </p> */}
            </div>

            {/* Contact Form */}
            <form className="space-y-6 mt-5">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  placeholder="Message"
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-600 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Right Content - Map */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/map.png"
                alt="Ahmedabad Location Map"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Map Overlay Info */}
           
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}
