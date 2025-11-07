import Link from "next/link";
import { FacebookIcon, TwitterIcon, InstagramIcon, Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-marca-green" />
              <span className="text-2xl font-bold text-white">
                POSITIVE-Next
              </span>
            </div>
            <p className="text-[#a0a0a0]">
              Empowering minds for a better tomorrow.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#features"
                  className="text-[#a0a0a0] hover:text-marca-green transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-[#a0a0a0] hover:text-marca-green transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  className="text-[#a0a0a0] hover:text-marca-green transition-colors"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-[#a0a0a0] hover:text-marca-green transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-[#a0a0a0] hover:text-marca-green transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/positivenext"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] hover:text-marca-green transition-colors"
              >
                <FacebookIcon size={24} />
              </a>
              <a
                href="https://twitter.com/positivenext"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] hover:text-marca-green transition-colors"
              >
                <TwitterIcon size={24} />
              </a>
              <a
                href="https://instagram.com/positivenext"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] hover:text-marca-green transition-colors"
              >
                <InstagramIcon size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#333] text-center">
          <p className="text-[#a0a0a0]">
            &copy; {new Date().getFullYear()} POSITIVE-Next. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
