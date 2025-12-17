import { Facebook, Twitter, Linkedin } from "lucide-react";
import footerlogo from '../../assets/footerlogo.png'

const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 container">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-white text-xl font-semibold">
            <img src={footerlogo} alt="" />
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Information</h3>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Main</li>
            <li className="hover:text-white cursor-pointer">Gallery</li>
            <li className="hover:text-white cursor-pointer">Projects</li>
            <li className="hover:text-white cursor-pointer">Certifications</li>
            <li className="hover:text-white cursor-pointer">Contacts</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contacts</h3>
          <ul className="space-y-3">
            <li>Austin Texas 78704</li>
            <li>512.333.2222</li>
            <li>sampleemail@gmail.com</li>
          </ul>
        </div>

        <div className="flex gap-5 mt-10 justify-end">
          <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
          <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
          <Linkedin className="w-5 h-5 hover:text-white cursor-pointer" />
        </div>
      </div>

      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center">
          <p className="text-sm text-[#C8C8C880]">© 2025 All Rights Reserved</p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer