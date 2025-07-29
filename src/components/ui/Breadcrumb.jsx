import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumb = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMap = {
    '/homepage': 'Home',
    '/services': 'Services',
    '/portfolio': 'Portfolio',
    '/gallery': 'Gallery',
    '/testimonials': 'Testimonials',
    '/contact': 'Contact'
  };

  const currentPath = location.pathname;
  const currentPageName = pathMap[currentPath];

  // Don't show breadcrumb on homepage
  if (currentPath === '/homepage' || currentPath === '/') {
    return null;
  }

  const handleHomeClick = () => {
    navigate('/homepage');
  };

  return (
    <nav className="flex items-center space-x-2 text-sm font-body mb-6" aria-label="Breadcrumb">
      <button
        onClick={handleHomeClick}
        className="text-muted-foreground hover:text-primary transition-smooth flex items-center space-x-1"
      >
        <Icon name="Home" size={16} />
        <span>Home</span>
      </button>
      
      <Icon name="ChevronRight" size={16} className="text-muted-foreground" />
      
      <span className="text-foreground font-medium" aria-current="page">
        {currentPageName}
      </span>
    </nav>
  );
};

export default Breadcrumb;