import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import {  FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Browse Gear", href: "/gear" },
  { label: "Become Provider", href: "/register" },
  { label: "Login", href: "/login" },
];

const exploreLinks = [
  { label: "Fitness", href: "/gear?category=Fitness" },
  { label: "Cycling", href: "/gear?category=Cycling" },
  { label: "Water Sports", href: "/gear?category=Water Sports" },
];

const supportLinks = [
  { label: "FAQs", href: "/faq" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const socials = [
  {
    icon: FaFacebookF,
    href: "#",
  },
  {
    icon: FaXTwitter,
    href: "#",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/md-al-amin-dev",
  },
  {
    icon: Phone,
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}

          <div>
            <Link
              href="/"
              className="text-3xl font-bold tracking-tight text-primary"
            >
              GearUp
            </Link>

            <p className="mt-5 max-w-md leading-7 text-muted-foreground">
              Rent premium outdoor and sports equipment from trusted providers.
              Explore more, spend less, and enjoy every adventure with GearUp.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {socials.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={index}
                    href={item.href}
                    target="_blank"
                    className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="size-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}

          <div>
            <h3 className="text-lg font-semibold">Explore</h3>

            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 text-primary" />
                <p className="text-muted-foreground">Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="size-5 text-primary" />
                <p className="text-muted-foreground">+880 1234-567890</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="size-5 text-primary" />
                <p className="text-muted-foreground">support@gearup.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t py-6 text-center text-sm text-muted-foreground md:flex-row">
          <p>© 2026 GearUp. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
