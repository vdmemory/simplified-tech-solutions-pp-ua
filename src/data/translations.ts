import { Translation } from '@/types/language';

export const translations: Record<'en' | 'ua', Translation> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      team: 'Team',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      contact: 'Contact'
    },
    hero: {
      title: 'Innovative Software Solutions',
      subtitle: 'for Modern Business',
      description: 'We create cutting-edge software, secure cybersecurity solutions, mobile applications, and cloud services that drive your business forward.',
      cta: 'View Portfolio',
      ctaSecondary: 'Contact Us',
      items: [
        {
          title: 'Intelligent Solutions',
          description: 'Modern software systems deeply integrated into the digital infrastructure of businesses.'
        },
        {
          title: 'Adaptive AI',
          description: 'Industry-specific machine learning algorithms that turn data into strategic decisions.'
        },
        {
          title: 'Cross-Industry Solutions',
          description: 'Software products for e-commerce, finance, healthcare, industry, and the public sector.'
        },
      ],
    },
    about: {
      title: 'About Us',
      subtitle: 'Leading Technology Innovation',
      description: 'We are a team of passionate developers, designers, and technology experts dedicated to creating exceptional digital solutions. With years of experience and a commitment to excellence, we help businesses transform their ideas into reality.',
      stats: {
        projects: 'Completed Projects',
        clients: 'Happy Clients',
        experience: 'Years Experience',
        satisfaction: 'Client Satisfaction'
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive Technology Solutions',
      items: [
        {
          title: 'Software Development',
          description: 'Custom software solutions tailored to your business needs, from web applications to enterprise systems.'
        },
        {
          title: 'Cybersecurity',
          description: 'Comprehensive security solutions to protect your digital assets and ensure data privacy.'
        },
        {
          title: 'Mobile Solutions',
          description: 'Native and cross-platform mobile applications for iOS and Android platforms.'
        },
        {
          title: 'Cloud Services',
          description: 'Scalable cloud infrastructure and migration services for modern businesses.'
        },
        {
          title: 'AI & Machine Learning',
          description: 'Intelligent algorithms and data analytics to enhance decision-making and operational efficiency.'
        },
        {
          title: 'DevOps & Automation',
          description: 'Streamlined development processes and continuous integration for faster delivery.'
        },
        {
          title: 'UI/UX Design',
          description: 'User-centered design to create intuitive and engaging digital experiences.'
        },
        {
          title: 'IT Consulting',
          description: 'Expert advice to optimize your technology strategy and implementation.'
        }
      ]
    },
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'Showcasing Our Best Work',
      viewProject: 'View Project',
      categories: ['All', 'Web Development', 'Mobile Apps', 'Cloud Solutions', 'Security'],
      items: [
        {
          title: 'E-Commerce Platform',
          category: 'Web Development',
          description: 'Modern e-commerce solution with advanced features',
        },
        {
          title: 'Security Dashboard',
          category: 'Security',
          description: 'Comprehensive cybersecurity monitoring system',
        },
        {
          title: 'Mobile Banking App',
          category: 'Mobile Apps',
          description: 'Secure and user-friendly banking application',
        },
        {
          title: 'Cloud Infrastructure',
          category: 'Cloud Solutions',
          description: 'Scalable cloud architecture for enterprise',
        },
        {
          title: 'Analytics Platform',
          category: 'Web Development',
          description: 'Real-time data analytics and visualization',
        },
        {
          title: 'IoT Security System',
          category: 'Security',
          description: 'Advanced IoT device security management',
        },
        {
          title: 'Fitness Tracker App',
          category: 'Mobile Apps',
          description: 'Track your fitness goals with ease',
        },
        {
          title: 'AI Chatbot',
          category: 'AI Solutions',
          description: 'Intelligent chatbot for customer support and engagement'
        }
      ],
    },
    team: {
      title: 'Our Team',
      subtitle: 'Meet the Experts Behind Our Success',
      members: [
        {
          name: 'Alex Johnson',
          position: 'CEO & Founder',
          bio: 'Visionary leader with 15+ years in technology innovation and business development.'
        },
        {
          name: 'Sarah Chen',
          position: 'CTO',
          bio: 'Technical expert specializing in software architecture and emerging technologies.'
        },
        {
          name: 'Michael Rodriguez',
          position: 'Lead Developer',
          bio: 'Full-stack developer with expertise in modern web and mobile technologies.'
        },
        {
          name: 'Emily Davis',
          position: 'Security Specialist',
          bio: 'Cybersecurity expert focused on protecting digital assets and data privacy.'
        }
      ]
    },
    brands: {
      title: 'Trusted by Leading Brands',
      subtitle: 'We work with companies of all sizes'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions',
      items: [
        {
          question: 'What technologies do you work with?',
          answer: 'We work with a wide range of modern technologies including React, Node.js, Python, AWS, Azure, and many others.'
        },
        {
          question: 'How long does a typical project take?',
          answer: 'Project timelines vary depending on complexity, but most projects are completed within 3-6 months.'
        },
        {
          question: 'Do you provide ongoing support?',
          answer: 'Yes, we offer comprehensive maintenance and support packages for all our solutions.'
        },
        {
          question: 'Can you work with our existing systems?',
          answer: 'Absolutely! We specialize in integrating with existing systems and modernizing legacy applications.'
        },
        {
            question: 'What is your approach to project management?',
            answer: 'We follow Agile methodologies to ensure flexibility, transparency, and continuous improvement throughout the project lifecycle.'
        },
        {
            question: 'Do you offer custom solutions?',
            answer: 'Yes, we tailor our services to meet the specific needs and goals of each client, ensuring a personalized approach.'
        },
        {
            question: 'How do you ensure data security?',
            answer: 'We implement industry-standard security practices, including encryption, access controls, and regular security audits to protect your data.'
        },
      ],
      ctaBlock: 'Still have questions? We\'re here to help!',
        ctaButton: 'Contact Us'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to start your project?',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message'
      },
      info: {
        address: '123 Tech Street, Innovation City, IC 12345',
        phone: '+1 (555) 123-4567',
        email: 'hello@techcompany.com',
        hours: 'Mon - Fri: 9:00 AM - 6:00 PM'
      }
    },
    common: {
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      viewAll: 'View All',
      loading: 'Loading...',
      error: 'Something went wrong'
    }
  },
  ua: {
    nav: {
      home: 'Головна',
      about: 'Про нас',
      services: 'Послуги',
      portfolio: 'Портфоліо',
      team: 'Команда',
      testimonials: 'Відгуки',
      faq: 'FAQ',
      contact: 'Контакти'
    },
    hero: {
      title: 'Інноваційні програмні рішення',
      subtitle: 'для сучасного бізнесу',
      description: 'Ми створюємо передові програмні продукти, безпечні кібербезпекові рішення, мобільні додатки та хмарні сервіси, які рухають ваш бізнес вперед.',
      cta: 'Переглянути портфоліо',
      ctaSecondary: 'Зв\'язатися з нами',
        items: [
            {
            title: 'Інтелектуальні рішення',
            description: 'Сучасні програмні системи, глибоко інтегровані в цифрову інфраструктуру бізнесу.'
            },
            {
            title: 'Адаптивний ШІ',
            description: 'Алгоритми машинного навчання для конкретних галузей, які перетворюють дані на стратегічні рішення.'
            },
            {
            title: 'Міжгалузеві рішення',
            description: 'Програмні продукти для електронної комерції, фінансів, охорони здоров\'я, промисловості та державного сектору.'
            }
        ]
    },
    about: {
      title: 'Про нас',
      subtitle: 'Лідери технологічних інновацій',
      description: 'Ми команда пристрасних розробників, дизайнерів та технологічних експертів, присвячених створенню виняткових цифрових рішень. З багаторічним досвідом та прихильністю до досконалості, ми допомагаємо бізнесу втілювати ідеї в реальність.',
      stats: {
        projects: 'Завершених проектів',
        clients: 'Задоволених клієнтів',
        experience: 'Років досвіду',
        satisfaction: 'Задоволеність клієнтів'
      }
    },
    services: {
      title: 'Наші послуги',
      subtitle: 'Комплексні технологічні рішення',
      items: [
        {
          title: 'Розробка програмного забезпечення',
          description: 'Індивідуальні програмні рішення, адаптовані до потреб вашого бізнесу, від веб-додатків до корпоративних систем.'
        },
        {
          title: 'Кібербезпека',
          description: 'Комплексні рішення безпеки для захисту ваших цифрових активів та забезпечення конфіденційності даних.'
        },
        {
          title: 'Мобільні рішення',
          description: 'Нативні та кросплатформні мобільні додатки для iOS та Android платформ.'
        },
        {
          title: 'Хмарні сервіси',
          description: 'Масштабована хмарна інфраструктура та послуги міграції для сучасного бізнесу.'
        },
        {
          title: 'ШІ та машинне навчання',
          description: 'Інтелектуальні алгоритми та аналітика даних для покращення прийняття рішень та операційної ефективності.'
        },
        {
          title: 'DevOps та автоматизація',
          description: 'Оптимізовані процеси розробки та безперервна інтеграція для швидшої доставки.'
        },
        {
          title: 'UI/UX дизайн',
          description: 'Дизайн, орієнтований на користувача, для створення інтуїтивно зрозумілих та привабливих цифрових досвідів.'
        },
        {
          title: 'IT консалтинг',
          description: 'Експертні консультації для оптимізації вашої технологічної стратегії та впровадження.'
        }
      ]
    },
    portfolio: {
      title: 'Наше портфоліо',
      subtitle: 'Демонструємо наші найкращі роботи',
      viewProject: 'Переглянути проект',
      categories: ['Всі', 'Веб-розробка', 'Мобільні додатки', 'Хмарні рішення', 'Безпека'],
        items: [
            {
            title: 'Платформа електронної комерції',
            category: 'Веб-розробка',
            description: 'Сучасне рішення для електронної комерції з розширеними функціями'
            },
            {
            title: 'Панель безпеки',
            category: 'Безпека',
            description: 'Комплексна система моніторингу кібербезпеки'
            },
            {
            title: 'Мобільний банківський додаток',
            category: 'Мобільні додатки',
            description: 'Безпечний та зручний банківський додаток'
            },
            {
            title: 'Хмарна інфраструктура',
            category: 'Хмарні рішення',
            description: 'Масштабована хмарна архітектура для підприємств'
            },
            {
            title: 'Аналітична платформа',
            category: 'Веб-розробка',
            description: 'Аналітика даних в реальному часі та візуалізація'
            },
            {
            title: 'Система безпеки IoT',
            category: 'Безпека',
            description: 'Розширене управління безпекою пристроїв IoT'
            },
            {
            title: 'Додаток для відстеження фітнесу',
            category: 'Мобільні додатки',
            description: 'Легко відстежуйте свої фітнес-цілі'
            },
            {
            title: 'Інтелектуальний чат-бот',
            category: 'AI рішення',
            description: 'Інтелектуальний чат-бот для підтримки клієнтів та залучення'
            }
        ]
    },
    team: {
      title: 'Наша команда',
      subtitle: 'Познайомтеся з експертами нашого успіху',
      members: [
        {
          name: 'Олексій Іванов',
          position: 'CEO та засновник',
          bio: 'Візіонерський лідер з 15+ роками досвіду в технологічних інноваціях та розвитку бізнесу.'
        },
        {
          name: 'Сара Чен',
          position: 'CTO',
          bio: 'Технічний експерт, що спеціалізується на архітектурі програмного забезпечення та новітніх технологіях.'
        },
        {
          name: 'Михайло Родрігес',
          position: 'Провідний розробник',
          bio: 'Full-stack розробник з експертизою в сучасних веб та мобільних технологіях.'
        },
        {
          name: 'Емілі Девіс',
          position: 'Спеціаліст з безпеки',
          bio: 'Експерт з кібербезпеки, зосереджений на захисті цифрових активів та конфіденційності даних.'
        }
      ]
    },
    brands: {
      title: 'Нам довіряють провідні бренди',
      subtitle: 'Ми працюємо з компаніями всіх розмірів'
    },
    faq: {
      title: 'Часті запитання',
      subtitle: 'Знайдіть відповіді на поширені запитання',
      items: [
        {
          question: 'З якими технологіями ви працюєте?',
          answer: 'Ми працюємо з широким спектром сучасних технологій, включаючи React, Node.js, Python, AWS, Azure та багато інших.'
        },
        {
          question: 'Скільки часу займає типовий проект?',
          answer: 'Терміни проектів варіюються залежно від складності, але більшість проектів завершується протягом 3-6 місяців.'
        },
        {
          question: 'Чи надаєте ви постійну підтримку?',
          answer: 'Так, ми пропонуємо комплексні пакети обслуговування та підтримки для всіх наших рішень.'
        },
        {
          question: 'Чи можете ви працювати з нашими існуючими системами?',
          answer: 'Звичайно! Ми спеціалізуємося на інтеграції з існуючими системами та модернізації застарілих додатків.'
        },
        {
            question: 'Який ваш підхід до управління проектами?',
            answer: 'Ми дотримуємося Agile-методологій, щоб забезпечити гнучкість, прозорість та постійне вдосконалення протягом життєвого циклу проекту.'
        },
        {
            question: 'Чи пропонуєте ви індивідуальні рішення?',
            answer: 'Так, ми адаптуємо наші послуги до конкретних потреб та цілей кожного клієнта, забезпечуючи персоналізований підхід.'
        },
        {
            question: 'Як ви забезпечуєте безпеку даних?',
            answer: 'Ми впроваджуємо галузеві стандарти безпеки, включаючи шифрування, контроль доступу та регулярні аудити безпеки для захисту ваших даних.'
        },
      ],
        ctaBlock: 'Все ще маєте запитання? Ми тут, щоб допомогти!',
        ctaButton: 'Зв\'яжіться з нами'
    },
    contact: {
      title: 'Зв\'яжіться з нами',
      subtitle: 'Готові розпочати свій проект?',
      form: {
        name: 'Повне ім\'я',
        email: 'Електронна пошта',
        subject: 'Тема',
        message: 'Повідомлення',
        send: 'Надіслати повідомлення'
      },
      info: {
        address: 'вул. Технологічна 123, Інноваційне місто, ІМ 12345',
        phone: '+380 (44) 123-4567',
        email: 'hello@techcompany.com',
        hours: 'Пн - Пт: 9:00 - 18:00'
      }
    },
    common: {
      learnMore: 'Дізнатися більше',
      getStarted: 'Почати',
      viewAll: 'Переглянути все',
      loading: 'Завантаження...',
      error: 'Щось пішло не так'
    }
  }
};