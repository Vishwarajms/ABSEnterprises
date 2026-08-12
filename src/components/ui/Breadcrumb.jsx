import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-ink-400">
      <Link to="/" className="flex items-center gap-1 hover:text-brass-500">
        <Home size={12} /> Home
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={12} />
          {item.path ? (
            <Link to={item.path} className="hover:text-brass-500">
              {item.name}
            </Link>
          ) : (
            <span className="text-ink-600 font-medium">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
