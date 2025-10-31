"use client";

export function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold">Triller Media</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Dubai, UAE • Creative Agency
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#about"
              onClick={(e) => handleClick(e, "#about")}
              className="text-muted-foreground transition-colors hover:text-foreground touch-manipulation"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => handleClick(e, "#services")}
              className="text-muted-foreground transition-colors hover:text-foreground touch-manipulation"
            >
              Services
            </a>
            <a
              href="#work"
              onClick={(e) => handleClick(e, "#work")}
              className="text-muted-foreground transition-colors hover:text-foreground touch-manipulation"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="text-muted-foreground transition-colors hover:text-foreground touch-manipulation"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Triller Media L.L.C-Fz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

