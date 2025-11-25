import React, { useState, useCallback, useRef } from 'react';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { cn } from '../../utils/cn';
import { useClickOutside, useEscape } from '../../hooks';
import { useI18n } from '../../i18n';

export interface MenuItem {
  identifier: string;
  name: string;
  url: string;
}

export interface HeaderProps {
  title: string;
  subtitle?: string;
  logoUrl?: string;
  logoAlt?: string;
  menuItems?: MenuItem[];
  activeMenuItem?: string;
  onLogoClick?: () => void;
  onMenuItemClick?: (item: MenuItem) => void;
  showMobileMenu?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  logoUrl,
  logoAlt = 'Logo',
  menuItems = [],
  activeMenuItem,
  onLogoClick,
  onMenuItemClick,
  showMobileMenu = true,
}) => {
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  const handleMenuClick = useCallback(
    (item: MenuItem) => {
      onMenuItemClick?.(item);
      setMobileMenuOpen(false);
    },
    [onMenuItemClick]
  );

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  useClickOutside(menuRef, closeMenu);
  useEscape(closeMenu, mobileMenuOpen);

  return (
    <header className="mb-6 pb-4 border-b-2 border-pixel-border">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {onLogoClick ? (
              <button
                onClick={onLogoClick}
                className="flex items-center gap-3"
                aria-label={t('header.homePage')}
              >
                {logoUrl && (
                  <img
                    src={logoUrl}
                    alt={logoAlt}
                    className="w-12 h-12"
                    style={{ imageRendering: 'pixelated' }}
                    width={48}
                    height={48}
                  />
                )}
                <div>
                  <Typography variant="h1" size="xl" pixel>
                    {title}
                  </Typography>
                  {subtitle && (
                    <Typography variant="p" size="xs" pixel className="text-pixel-text-muted mt-1">
                      &gt; {subtitle}
                    </Typography>
                  )}
                </div>
              </button>
            ) : (
              <div className="flex items-center gap-3">
                {logoUrl && (
                  <img
                    src={logoUrl}
                    alt={logoAlt}
                    className="w-12 h-12"
                    style={{ imageRendering: 'pixelated' }}
                    width={48}
                    height={48}
                  />
                )}
                <div>
                  <Typography variant="h1" size="xl" pixel>
                    {title}
                  </Typography>
                  {subtitle && (
                    <Typography variant="p" size="xs" pixel className="text-pixel-text-muted mt-1">
                      &gt; {subtitle}
                    </Typography>
                  )}
                </div>
              </div>
            )}
          </div>

          {showMobileMenu && menuItems.length > 0 && (
            <button
              onClick={toggleMobileMenu}
              className="sm:hidden pixel-button text-xs p-2"
              aria-label={t('header.toggleMenu')}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? '×' : '☰'}
            </button>
          )}
        </div>

        {menuItems.length > 0 && (
          <>
            <nav
              className="hidden sm:flex items-center gap-2 flex-wrap"
              aria-label={t('header.mainNavigation')}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.identifier}
                  size="xs"
                  active={activeMenuItem === item.identifier}
                  onClick={() => handleMenuClick(item)}
                >
                  {item.name}
                </Button>
              ))}
            </nav>

            {showMobileMenu && (
              <nav
                ref={menuRef}
                className={cn('sm:hidden flex flex-col gap-2', mobileMenuOpen ? 'block' : 'hidden')}
                aria-label={t('header.mobileNavigation')}
                aria-hidden={!mobileMenuOpen}
              >
                {menuItems.map((item) => (
                  <Button
                    key={item.identifier}
                    size="xs"
                    fullWidth
                    active={activeMenuItem === item.identifier}
                    onClick={() => handleMenuClick(item)}
                  >
                    {item.name}
                  </Button>
                ))}
              </nav>
            )}
          </>
        )}
      </div>
    </header>
  );
};
