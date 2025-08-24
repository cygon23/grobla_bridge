import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import LogoImg from "../../assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState("");
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "Our Story", href: "/about#story" },
        { name: "Mission & Vision", href: "/about#mission" },
        { name: "Our Team", href: "/about#team" },
      ],
    },
    { name: "Programs", href: "/programs" },
    { name: "Events", href: "/events" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-blur shadow-medium" : "bg-transparent"
      }`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-3 group'>
            <img
              src={LogoImg}
              alt='Global Bridging Center Logo'
              className='w-30 h-16 object-contain group-hover:scale-110 transition-transform duration-300'
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center space-x-2'>
            {navigation.map((item) => (
              <div key={item.name} className='relative group'>
                <Link
                  to={item.href}
                  onMouseEnter={() =>
                    item.dropdown && setDropdownOpen(item.name)
                  }
                  onMouseLeave={() => setDropdownOpen("")}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-primary bg-primary/10 shadow-soft"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}>
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                        dropdownOpen === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && dropdownOpen === item.name && (
                  <div
                    className='absolute top-full left-0 mt-2 w-56 bg-card border border-border/50 rounded-lg shadow-large backdrop-blur-md animate-scale-in'
                    onMouseEnter={() => setDropdownOpen(item.name)}
                    onMouseLeave={() => setDropdownOpen("")}>
                    <div className='py-2'>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className='block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-200'>
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className='flex items-center space-x-4'>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className='w-10 h-10 rounded-lg bg-muted/50 hover:bg-muted hover:scale-105 flex items-center justify-center transition-all duration-300 shadow-soft hover:shadow-medium'
              aria-label='Toggle theme'>
              {theme === "dark" ? (
                <Sun className='h-5 w-5 text-foreground' />
              ) : (
                <Moon className='h-5 w-5 text-foreground' />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className='lg:hidden w-10 h-10 rounded-lg bg-muted/50 hover:bg-muted hover:scale-105 flex items-center justify-center transition-all duration-300 shadow-soft hover:shadow-medium'
              aria-label='Toggle menu'>
              {isOpen ? (
                <X className='h-5 w-5 text-foreground' />
              ) : (
                <Menu className='h-5 w-5 text-foreground' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className='lg:hidden absolute top-full left-0 right-0 navbar-blur border-b border-border/50 shadow-xl animate-slide-up'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 py-6'>
            <div className='flex flex-col space-y-2'>
              {navigation.map((item, index) => (
                <div
                  key={item.name}
                  className={`animate-fade-in stagger-${Math.min(
                    index + 1,
                    6
                  )}`}>
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10 shadow-soft"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}>
                    {item.name}
                  </Link>

                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className='ml-4 mt-2 space-y-1'>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className='block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded transition-colors duration-200'>
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setIsOpen(false);
                }}
                className='flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 animate-fade-in stagger-6'>
                {theme === "dark" ? (
                  <>
                    <Sun className='h-5 w-5' />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className='h-5 w-5' />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
