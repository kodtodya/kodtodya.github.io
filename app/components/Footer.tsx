export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-surface border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center font-black text-bg text-xs">
            AL
          </div>
          <span className="font-mono text-xs text-muted">
            Avadhut Lele — Solutions Architect, Pune
          </span>
        </div>

        <p className="font-mono text-xs text-muted">
          © {year} · Built with Next.js &amp; Framer Motion
        </p>

        <div className="flex items-center gap-5">
          <a href="https://github.com/kodtodya" target="_blank" rel="noopener noreferrer"
            className="text-xs font-mono text-muted hover:text-accent transition-colors">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/kodtodya/" target="_blank" rel="noopener noreferrer"
            className="text-xs font-mono text-muted hover:text-accent transition-colors">
            LinkedIn ↗
          </a>
          <a href="https://kodtodya.github.io" target="_blank" rel="noopener noreferrer"
            className="text-xs font-mono text-muted hover:text-accent transition-colors">
            Portfolio ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
