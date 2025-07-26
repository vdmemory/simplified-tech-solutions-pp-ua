export type Language = 'en' | 'ua';

export interface Translation {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    team: string;
    testimonials: string;
    faq: string;
    contact: string;
  };
  
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    ctaSecondary: string;
  };
  
  // About Section
  about: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      projects: string;
      clients: string;
      experience: string;
      satisfaction: string;
    };
  };
  
  // Services Section
  services: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  
  // Portfolio Section
  portfolio: {
    title: string;
    subtitle: string;
    viewProject: string;
    categories: string[];
  };
  
  // Team Section
  team: {
    title: string;
    subtitle: string;
    members: {
      name: string;
      position: string;
      bio: string;
    }[];
  };
  
  // Testimonials Section
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      text: string;
      author: string;
      position: string;
      company: string;
    }[];
  };
  
  // Brands Section
  brands: {
    title: string;
    subtitle: string;
  };
  
  // FAQ Section
  faq: {
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
      hours: string;
    };
  };
  
  // Common
  common: {
    learnMore: string;
    getStarted: string;
    viewAll: string;
    loading: string;
    error: string;
  };
}