import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function PublicFooter() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Product Column */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              Product
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/product/ai-calls"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  AI Calls
                </Link>
              </li>
              <li>
                <Link
                  href="/product/text-agents"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  AI Text Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/product/workflow"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/product/whatsapp"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  WhatsApp AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              Solutions
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/solutions/sales"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/marketing"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/operations"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  Operations
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/industry/saas"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  SaaS
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/industry/real-estate"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  Real Estate
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              Resources
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/docs"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/academy"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  Academy
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              Company
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/affiliate"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm leading-6 text-[#a0a0a0] hover:text-marca-green"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white">
              Stay updated
            </h3>
            <p className="mt-4 text-sm leading-6 text-[#a0a0a0]">
              Get the latest news and updates.
            </p>
            <form className="mt-6 flex gap-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-auto bg-[#2a2a2a] border-[#333] text-white placeholder:text-[#666]"
              />
              <Button
                type="submit"
                className="bg-marca-green hover:bg-marca-green/90 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-[#333] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/share/14JB8uTEPY4/?mibextid=wwXIfr"
                className="text-[#a0a0a0] hover:text-marca-green"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#a0a0a0] hover:text-marca-green"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/marcafusionsrl/"
                className="text-[#a0a0a0] hover:text-marca-green"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#a0a0a0] hover:text-marca-green"
              >
                <span className="sr-only">YouTube</span>
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/marcafusion?igsh=ZHNkZDF3bGtzZTN0"
                className="text-[#a0a0a0] hover:text-marca-green"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            {/* Copyright and Legal */}
            <div className="flex flex-col items-center gap-4 text-sm text-[#a0a0a0] md:flex-row">
              <p>&copy; 2025 Boring Automation. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="/privacy" className="hover:text-marca-green">
                  Privacy
                </Link>
                <Link href="/terms" className="hover:text-marca-green">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
