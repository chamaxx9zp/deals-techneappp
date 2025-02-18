export default function Footer() {
    return (
      <footer className="bg-[#8B1D3D] text-white py-10">
        <div className="mx-auto px-4 md:px-10 grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold">WanderQuest</h2>
            <p className="text-sm mt-2">Your gateway to unforgettable journeys. Discover, explore, and book with confidence.</p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-[#E85D24]">Home</a></li>
              <li><a href="#" className="hover:text-[#E85D24]">Destinations</a></li>
              <li><a href="#" className="hover:text-[#E85D24]">Packages</a></li>
              <li><a href="#" className="hover:text-[#E85D24]">Contact Us</a></li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-[#E85D24]">Facebook</a>
              <a href="#" className="hover:text-[#E85D24]">Instagram</a>
              <a href="#" className="hover:text-[#E85D24]">Twitter</a>
            </div>
          </div>
  
          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm mt-2">Subscribe to get the latest travel deals!</p>
            <div className="mt-3 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-l bg-white text-black outline-none"
              />
              <button className="bg-orange-800 px-4 py-2 rounded-r hover:bg-orange-700">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-8 border-t border-orange-500 pt-4">
          &copy; {new Date().getFullYear()} WanderQuest. All rights reserved.
        </div>
      </footer>
    );
  }
  