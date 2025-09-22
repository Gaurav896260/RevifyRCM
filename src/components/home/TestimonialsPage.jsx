import React from 'react';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-orange-500">
            <span className="material-icons text-base">format_quote</span>
            Testimonials
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 text-gray-800 dark:text-gray-100">
            Results that speaks volume
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-500 dark:text-gray-400">
            Read success stories
          </h2>
          <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Find out how our happy clients are raving about us.
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large testimonial card */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <h3 className="text-7xl font-bold text-gray-800 dark:text-gray-100">8X</h3>
              <p className="text-xl font-semibold mt-2 text-gray-800 dark:text-gray-100">
                Increase in conversion rate
              </p>
              <div className="mt-8">
                <span className="material-icons text-orange-500 text-4xl transform -scale-x-100">
                  format_quote
                </span>
                <blockquote className="text-base text-gray-500 dark:text-gray-400 mt-2">
                  "We needed a modern, high-converting website, and the Bravio team delivered beyond expectations. Their design and SEO expertise helped us increase conversion rate by 800% in just two weeks. Highly recommend!"
                </blockquote>
              </div>
            </div>
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-4">
                <img 
                  alt="David Callahan's profile picture" 
                  className="w-12 h-12 rounded-full" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-bxD7E2JwGdMh1wNMl5ZlBQptdEnYkSL4eoi_tTUPY5G0WNCxD82OCherAiCsXhVjwyOPFKnDW9Wz4mHCvGrwMt9K8iFHgf62L5nwl5-bl1SJkHPkJnwv-UDXf1h2R2m8kwa6IPFByjj7J-sdIIdkSdL0sX6FX3vxVdzGKz94m-SD2TwAExmYY_LH0AS3ptssWJSDnRvV7aVJNSU_r_4xMI3NJAI5OxTQkNJ2n7eFIQZMmYCFh1hEmzrXWo0zRMPW4uJd3AS5rKwY"
                />
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">David Callahan</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Director, Spotify</p>
                </div>
              </div>
              <img 
                alt="Spotify logo" 
                className="w-8 h-8" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsknA2FQOUxoju_1oZU1_E4NoFwjEITRTQ6aPrxRFCPmlf6XUi0OuVZuhDg6-TE6blTngED9kjob6AXJOxrofrw-lom1Ua3F7cNQI9VJgArMjmALxphM0TikPG5E36uOqSS6ZAXeCU4iLwTWSzYJ0Sb9_l9yyPf3BQFBj3j8iGbC7H07xRge_tbHTGfuj_6NtN-QdydpkvWhklkfrKvJ7ZzH6IB-fsD_Q21Wu9ob781hLAcwNbpDgnGDSVjJVbziGgzmjEULKOfrYo"
              />
            </div>
          </div>

          {/* Right column with 2 rows */}
          <div className="grid grid-rows-2 gap-8">
            {/* Medium testimonial card */}
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
                  2X <span className="text-xl font-semibold">Increase in lead generation</span>
                </h3>
                <div className="mt-4">
                  <span className="material-icons text-orange-500 text-4xl transform -scale-x-100">
                    format_quote
                  </span>
                  <blockquote className="text-base text-gray-500 dark:text-gray-400 mt-2">
                    "From branding to website design, every detail was meticulously handled. The team's expertise helped us launch faster, and the results have been phenomenal!"
                  </blockquote>
                </div>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-4">
                  <img 
                    alt="Sarah Mitchel's profile picture" 
                    className="w-10 h-10 rounded-full" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDziJnnK0xaf2m7him2HH-jD3goXweFcw3twgHflM9vPEBzYjv76lRvfNtF6wlMBBvE_c2TqR7EYBERcEDTdgNguLNj6I5IzDwIpuULRzsbU6WVOZTOLWurytUI6XV8rdOkZWm3aXG7UVjefB7gsO1J1ol2hYdQZNvgHCDy0MSq5DfMr6c1cVsLh94OOsv6-1v2OxWmC-PVBPGDAj-GXWRcWmkC_qAmVsp-cky0IkDXYtIrNTnJgao7rUNH_gKg_3DuKEklh5dNDfOu"
                  />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100">Sarah Mitchel</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Director, Google</p>
                  </div>
                </div>
                <svg className="w-7 h-7 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.0003 4.8833C12.0003 4.8833 16.3263 4.7013 19.5533 7.9253C22.7803 11.1493 22.9623 15.4743 22.9623 15.4743C22.9623 15.4743 18.6363 15.6563 15.4093 12.4323C12.1823 9.2083 12.0003 4.8833 12.0003 4.8833ZM11.9923 12.4221C11.9923 12.4221 12.1753 16.7441 8.9483 19.9681C5.7213 23.1921 1.3953 23.3741 1.3953 23.3741C1.3953 23.3741 1.2133 19.0491 4.4403 15.8251C7.6673 12.6011 11.9923 12.4221 11.9923 12.4221Z"></path>
                  <path d="M11.9999 12.0004C11.9999 12.0004 7.67388 12.1824 4.44688 15.4064C1.21988 18.6304 1.03788 22.9554 1.03788 22.9554L1.03798 12.0003C1.03798 12.0003 1.21998 7.67526 4.44698 4.45126C7.67398 1.22726 12.0000 1.04526 12.0000 1.04526L11.9999 12.0004Z"></path>
                  <path d="M12.0001 12.0004L12.0001 1.04529C16.3261 1.22729 19.5531 4.45129 22.7801 7.67529C25.0001 9.89529 22.9621 15.4744 22.9621 15.4744C18.6361 15.6564 15.4091 12.4324 12.1821 9.20839C12.1821 9.20839 12.0001 4.88339 12.0001 4.88339"></path>
                  <path d="M12.0001 12.0004L12.0001 22.9555C7.67406 22.7735 4.44706 19.5495 1.22006 16.3255C-0.999945 14.1055 1.03806 8.5264 1.03806 8.5264C5.36406 8.3444 8.59106 11.5684 11.8181 14.7924C11.8181 14.7924 12.0001 19.1174 12.0001 19.1174"></path>
                </svg>
              </div>
            </div>

            {/* Bottom row with 2 small cards */}
            <div className="grid grid-cols-2 gap-8">
              {/* Small testimonial card 1 */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <span className="material-icons text-orange-500 text-4xl transform -scale-x-100">
                    format_quote
                  </span>
                  <blockquote className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    "Their animation work took our product videos to the next level. The team truly understands user experience and storytelling."
                  </blockquote>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <img 
                    alt="Tom Becker's profile picture" 
                    className="w-10 h-10 rounded-full" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA5HBvKdq6tIob4xRaGnMoyon5PVnxTAMvAra5knMf-DwKm5suL0ySa0Ab8uEyD0mKfkwAKjrmJtSn7ZfL7T8YSOaehLP5PYYpKNkKVTg16DiXwT_n7pF_-gQVvl23uR_BCh0EDp3P3UTHLpa6lQtIi5aHZDAT-3vBuqaEVUvvNMqR6WaN3s5HA4KS3P7YGe-MQ3sEapmMfGqUITd6VZF3c0kFwiYc0ZH_sDbt1g1xaesFMuDPeLmT_B3vd_aDONe9lF-Xe5Pw63_v"
                  />
                  <div>
                    <p className="font-semibold text-sm text-gray-800 dark:text-gray-100">Tom Becker</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Founder, PulseCore</p>
                  </div>
                </div>
              </div>

              {/* Small testimonial card 2 - darker theme */}
              <div className="bg-gray-800 dark:bg-gray-900 text-gray-100 p-6 rounded-3xl flex flex-col justify-between">
                <div>
                  <span className="material-icons text-orange-500 text-4xl transform -scale-x-100">
                    format_quote
                  </span>
                  <blockquote className="text-sm text-gray-400 mt-2">
                    "The team nailed our MVP design with a fast turnaround and incredible attention to detail. The final product felt polished and professional."
                  </blockquote>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <img 
                    alt="Sarah Mitchel's profile picture" 
                    className="w-10 h-10 rounded-full" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqo3lREBL2lj_zB6Lvd-XCJ1TB6Ndjm9-i-mDXabXyJyLjqC8v3KVHMSPD64vcn3JESkCadOIjnnR3BC7NaEUuprr-QLWP6iU6PqeQmksv4INYwkZec8eQ5lj1SO3_2DrK3n4lEty0qLca9eABVReVWWtK9h4IK9mwcW6IDet3j8bkzTDITCkPiV_zFfHt9rC6xp7r4kiJGhdl1n-7zhqAUzPJfYvv92GSCZHfsDZal80HE99YsPlL9Tp1ovqMNx9dUQNlQPeQoVyP"
                  />
                  <div>
                    <p className="font-semibold text-sm">Sarah Mitchel</p>
                    <p className="text-xs text-gray-400">Marketing Director, Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}