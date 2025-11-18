const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container-max py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="text-xl font-bold uppercase tracking-tight">
              RAMANA
            </div>
            <a 
              href="mailto:ramanakumarbingi@gmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors block"
            >
              ramanakumarbingi@gmail.com
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ramana Kumar Bingi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;