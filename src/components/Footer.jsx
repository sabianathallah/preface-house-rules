import { Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Left Section - Brand */}
        <div className="footer-brand-section">
          <img 
            src="/logo-preface.jpeg" 
            alt="PREFACE" 
            className="footer-logo"
          />
          <div>
            <div className="footer-brand">PREFACE</div>
            <div className="footer-tagline">Building Better Workplaces</div>
          </div>
        </div>

        {/* Middle Section - Contact Info */}
        <div className="footer-links-section">
          <div className="footer-link-group">
            <div className="footer-link-title">Kontak</div>
            <a href="mailto:sabian.athallah05@gmail.com" className="footer-link">
              <Mail size={14} />
              sabian.athallah05@gmail.com
            </a>
            <a href="tel:+6285887799935" className="footer-link">
              <Phone size={14} />
              +62 858-8779-9935
            </a>
          </div>

          <div className="footer-link-group">
            <div className="footer-link-title">Alamat</div>
            <div className="footer-address">
              <MapPin size={14} style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                Jl. Sarikaso III No.5<br />
                Sarijadi, Kec. Sukasari<br />
                Kota Bandung, Jawa Barat 40151
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Copyright */}
        <div className="footer-copyright-section">
          <div className="footer-copyright">
            Made with <Heart size={12} className="footer-copyright-heart" /> by PREFACE Team
          </div>
          <div className="footer-year">© {currentYear} PREFACE. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
