export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  // {
  //   id: '1',
  //   title: 'Getting Started with Next.js 14',
  //   excerpt: 'Learn how to build modern web applications with Next.js 14 and its powerful features.',
  //   content: `Next.js 14 introduces several groundbreaking features that make web development more efficient and enjoyable. 
  //   With the new app directory, you can build applications with better structure and faster load times. It also includes improved 
  //   server-side rendering capabilities, which allow developers to optimize SEO and deliver dynamic content with ease. Additionally, 
  //   the updated image optimization tools help reduce page load times by automatically generating responsive images tailored to 
  //   different screen sizes. Whether you're creating a personal project or building a large-scale application, Next.js 14 ensures 
  //   a seamless experience with built-in support for TypeScript, flexible routing, and an expanded API layer. Dive into this 
  //   powerful framework and unlock the potential of modern web development.`,
  //   author: 'John Doe',
  //   date: '2024-03-20',
  //   imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000',
  // },
  // {
  //   id: '2',
  //   title: 'Mastering Tailwind CSS',
  //   excerpt: 'Discover the power of utility-first CSS with Tailwind and create beautiful designs.',
  //   content: `Tailwind CSS has revolutionized the way we style web applications by embracing a utility-first approach. 
  //   Unlike traditional CSS frameworks, Tailwind allows you to build custom designs without ever leaving your HTML. It 
  //   provides a vast collection of utility classes, enabling developers to style elements directly in their markup. 
  //   This not only speeds up development but also ensures a consistent design system. With features like JIT (Just-In-Time) 
  //   mode and an intuitive configuration file, you can tailor Tailwind to fit any project. The latest version also includes 
  //   new variants, animations, and color palettes, making it easier than ever to create modern, responsive designs. If you're 
  //   tired of writing repetitive CSS or struggling with complex stylesheets, Tailwind CSS is your ultimate toolkit.`,
  //   author: 'Jane Smith',
  //   date: '2024-03-19',
  //   imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
  // },
  // {
  //   id: '3',
  //   title: 'TypeScript Best Practices',
  //   excerpt: 'Learn essential TypeScript patterns and practices for better code quality.',
  //   content: `TypeScript has become an essential tool for modern web development by introducing type safety to JavaScript. 
  //   To get the most out of TypeScript, it's important to follow best practices that enhance code quality and maintainability. 
  //   Start by enabling strict mode in your configuration file to catch common bugs early. Use interfaces and type aliases 
  //   effectively to define reusable, readable types for your application. Take advantage of utility types like Partial, 
  //   Readonly, and Pick to reduce repetitive code. When working with React, consider using generics to type components for 
  //   better flexibility. Additionally, always document complex types and maintain a consistent coding style to ensure your 
  //   codebase remains accessible to all team members. By adhering to these practices, you can write scalable, reliable, 
  //   and maintainable applications that stand the test of time.`,
  //   author: 'Mike Johnson',
  //   date: '2024-03-18',
  //   imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1000',
  // },
];
