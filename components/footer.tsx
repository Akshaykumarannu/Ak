export function Footer() {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Classes', href: '/classes' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Instructors', href: '/instructors' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'Schedule', href: '/schedule' },
      { name: 'Virtual Tour', href: '/virtual-tour' },
      { name: 'Register', href: '/register' },
      { name: 'FAQ', href: '/faq' }
    ]
  };

  return (
    <footer className="w-full border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Asian Kids Dance Crew</h3>
            <p className="text-muted-foreground mb-4">
              Empowering young dancers through movement and creativity.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/asiankids_dancecrew_official" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">Facebook</a>
              <a href="#" className="text-muted-foreground hover:text-primary">YouTube</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigation.main.slice(0, 6).map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="text-muted-foreground space-y-2">
              <p>123 Dance Street</p>
              <p>San Francisco, CA 94105</p>
              <p>contact@akdc.com</p>
              <p>(555) 123-4567</p>
              <p className="mt-4">
                <strong>Hours:</strong><br />
                Mon - Fri: 9:00 AM - 8:00 PM<br />
                Sat: 10:00 AM - 6:00 PM<br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Asian Kids Dance Crew. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="/privacy" className="hover:text-primary">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}