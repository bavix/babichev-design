import type { Meta, StoryObj } from '@storybook/react-vite';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProfileCard } from '../components/ProfileCard';
import { AboutCard } from '../components/AboutCard';
import { ServicesCard } from '../components/ServicesCard';
import { SocialLinksCard } from '../components/SocialLinksCard';
import { ContactInfoCard } from '../components/ContactInfoCard';
import { ArticleCard } from '../components/ArticleCard';
import { ProjectCard } from '../components/ProjectCard';
import { Typography } from '../components/Typography';
import { Box } from '../components/Box';

const meta: Meta = {
  title: 'Examples/HomePage',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-4 max-w-5xl">
        <Header
          title="MAXIM BABICHEV"
          subtitle="SOFTWARE DEVELOPER | GO | PHP | RUST"
          logoUrl="https://babichev.net/assets/svg/mascot.svg"
          menuItems={[
            { identifier: 'about', name: 'ABOUT', url: '/' },
            { identifier: 'projects', name: 'PROJECTS', url: '/projects/' },
            { identifier: 'articles', name: 'ARTICLES', url: '/articles/' },
          ]}
          activeMenuItem="about"
        />

        <main className="mt-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 space-y-4">
                <AboutCard>
                  <Typography variant="p" pixel>
                    &gt; Hello! My name is{' '}
                    <span className="text-pixel-accent font-bold">Maxim</span> — a Software
                    Developer who turns ideas into code and code into solutions. I love clean code,
                    interesting challenges, and coffee ☕
                  </Typography>
                  <div className="space-y-4 border-l-2 border-pixel-border pl-4 sm:pl-6">
                    <Typography variant="p" pixel>
                      &gt; Originally from{' '}
                      <span className="text-pixel-border-light">Krasnodar Region</span>, where I got
                      my first programming skills.
                    </Typography>
                    <Typography variant="p" pixel>
                      &gt; Started with <span className="text-pixel-border-light">Objective C</span>{' '}
                      and <span className="text-pixel-border-light">Swift</span>, then moved to
                      backend with <span className="text-pixel-border-light">PHP</span>.
                    </Typography>
                  </div>
                </AboutCard>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Box padding="md">
                    <div className="flex items-center justify-between mb-3">
                      <Typography variant="h2" size="base" pixel>
                        PROJECTS
                      </Typography>
                      <button className="pixel-button text-xs">VIEW ALL</button>
                    </div>
                    <Typography variant="p" size="xs" pixel className="text-pixel-text-muted">
                      &gt; Open source projects and contributions
                    </Typography>
                  </Box>

                  <Box padding="md">
                    <div className="flex items-center justify-between mb-3">
                      <Typography variant="h2" size="base" pixel>
                        ARTICLES
                      </Typography>
                      <button className="pixel-button text-xs">VIEW ALL</button>
                    </div>
                    <Typography variant="p" size="xs" pixel className="text-pixel-text-muted">
                      &gt; Technical notes and articles
                    </Typography>
                  </Box>
                </div>

                <div className="space-y-4">
                  <ProjectCard
                    title="Laravel Wallet"
                    url="/projects/laravel-wallet/"
                    excerpt="A flexible package for managing wallets in Laravel applications"
                    date="02.01.2024"
                    tags={['php', 'laravel', 'payment', 'wallet']}
                    links={[
                      {
                        type: 'github',
                        url: 'https://github.com/bavix/laravel-wallet',
                        label: 'GITHUB',
                      },
                      { type: 'docs', url: 'https://laravel-wallet.docs', label: 'DOCS' },
                    ]}
                  />

                  <ArticleCard
                    title="How to Build a Design System"
                    url="/articles/design-system/"
                    excerpt="A comprehensive guide to building a design system from scratch"
                    date="02.01.2024"
                    tags={['design', 'ui', 'react']}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <ProfileCard
                  login="REZ1DENT3"
                  name="Maxim Babichev"
                  profession="Software Developer"
                  githubUrl="https://github.com/rez1dent3"
                  logoUrl="https://babichev.net/assets/svg/logo.svg"
                />
                <ContactInfoCard email="contact@example.com" phone="+1 (555) 123-4567" />
                <SocialLinksCard
                  links={[
                    { name: 'GITHUB', url: 'https://github.com/rez1dent3' },
                    { name: 'TELEGRAM', url: 'https://t.me/mbabichev' },
                    { name: 'TWITTER', url: 'https://twitter.com/rez1dent3' },
                    { name: 'HABR', url: 'https://habr.com/users/REZ1DENT3/' },
                  ]}
                />
                <ServicesCard
                  services={[
                    {
                      name: 'EXCALIDRAW',
                      url: 'https://excalidraw.babichev.net',
                      description: 'Online whiteboard',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </main>

        <Footer login="REZ1DENT3" name="Maxim Babichev" startYear={2014} />
      </div>
    </div>
  ),
};
