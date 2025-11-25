export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { Box } from './components/Box';
export type { BoxProps } from './components/Box';

export { Typography } from './components/Typography';
export type { TypographyProps } from './components/Typography';

export { Spinner } from './components/Spinner';
export type { SpinnerProps } from './components/Spinner';

export { Badge } from './components/Badge';
export type { BadgeProps } from './components/Badge';

export { ProfileCard } from './components/ProfileCard';
export type { ProfileCardProps } from './components/ProfileCard';

export { AboutCard } from './components/AboutCard';
export type { AboutCardProps } from './components/AboutCard';

export { ServicesCard } from './components/ServicesCard';
export type { ServicesCardProps, Service } from './components/ServicesCard';

export { SocialLinksCard } from './components/SocialLinksCard';
export type { SocialLinksCardProps, SocialLink } from './components/SocialLinksCard';

export { ContactInfoCard } from './components/ContactInfoCard';
export type { ContactInfoCardProps } from './components/ContactInfoCard';

export { Header } from './components/Header';
export type { HeaderProps, MenuItem } from './components/Header';

export { Footer } from './components/Footer';
export type { FooterProps } from './components/Footer';

export { Tag } from './components/Tag';
export type { TagProps } from './components/Tag';

export { ArticleCard } from './components/ArticleCard';
export type { ArticleCardProps } from './components/ArticleCard';

export { ProjectCard } from './components/ProjectCard';
export type { ProjectCardProps, ProjectLink } from './components/ProjectCard';

export { ErrorPage } from './components/ErrorPage';
export type { ErrorPageProps } from './components/ErrorPage';

export { ErrorBoundary } from './components/ErrorBoundary';

export { ThemeProvider, useTheme } from './contexts';
export type { Theme, ThemeProviderProps } from './contexts';

export { I18nProvider, useI18n } from './i18n';
export type {
  Locale,
  I18nProviderProps,
  Translations,
  I18nContextValue,
  TranslationParams,
} from './i18n';

export * from './utils/validate';
export * from './utils/errors';
export * from './utils/ssr';
