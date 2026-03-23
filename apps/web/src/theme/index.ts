/**
 * ReviewPath Centralized Design System
 * All design tokens live here to ensure consistency and maintainability.
 */

export const theme = {
  colors: {
    // Base palette
    bg: '#0A0B0F',           // Near-black charcoal
    panel: '#11131A',        // Deep slate
    panelAlt: '#151925',     // Slightly lighter panel
    border: '#242938',       // Subtle border
    
    // Text
    text: '#F5F7FB',         // Soft white
    textMuted: '#9AA3B2',    // Cool gray
    
    // Accents & Signals
    accent: '#7C8CFF',       // Indigo / electric blue hybrid
    accentHover: '#93A1FF',
    accentMuted: 'rgba(124, 140, 255, 0.15)',
    
    success: '#30C48D',      // Controlled green
    warning: '#F5B942',      // Warm amber
    danger: '#F15B5D',       // Controlled red
    info: '#58A6FF',         // Blue
    
    // Transparent layers
    overlay: 'rgba(0, 0, 0, 0.6)',
    glass: 'rgba(255, 255, 255, 0.03)',
  },
  
  radius: {
    xs: '6px',
    sm: '10px',
    md: '14px',
    lg: '18px',
    xl: '24px',
    full: '9999px',
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xxl: '32px',
    xxxl: '48px',
  },
  
  font: {
    sans: '"Inter", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  
  typography: {
    display: { size: '40px', leading: '48px' },
    h1: { size: '32px', leading: '40px' },
    h2: { size: '24px', leading: '32px' },
    h3: { size: '20px', leading: '28px' },
    h4: { size: '18px', leading: '26px' },
    bodyLarge: { size: '16px', leading: '24px' },
    body: { size: '14px', leading: '22px' },
    bodySmall: { size: '13px', leading: '20px' },
    caption: { size: '12px', leading: '18px' },
  },
  
  layout: {
    sidebarWidth: 280,
    contentMaxWidth: 1440,
    topbarHeight: 64,
  },
  
  shadows: {
    subtle: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 20px rgba(124, 140, 255, 0.3)',
  },
};

export type ThemeType = typeof theme;
