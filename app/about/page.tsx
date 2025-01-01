import { Github, Linkedin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Ahsuu27488',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/Ahsuu27488/',
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      href: 'https://wa.me/923073739090',
    },
  ];

  return (
    <div className="container max-w-2xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About BlogsTerra</h1>
        <p className="text-muted-foreground">
          A modern blogging platform focused on web development, technology, and programming.
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
          <div className="grid gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-md hover:bg-accent transition-colors"
                >
                  <Icon className="h-5 w-5 mr-3" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
          <p className="text-muted-foreground mb-4">
            Check out my portfolio to see more of my work and projects.
          </p>
          <Button className="w-full" disabled>
            Portfolio Coming Soon
          </Button>
        </div>
      </div>
    </div>
  );
}