export const colors = {
  bg: '#f6f3ee',
  text: '#1c1b18',
  green: '#19b083',
  greenDark: '#0e6b4f',
  greenHover: '#14a37f',
  borderLight: '#e8e4dc',
  borderMed: '#e2ddd3',
  borderStrong: '#d9d3c7',
  divider: '#efebe3',
  muted1: '#6f6a60',
  muted2: '#7d776b',
  muted3: '#8d877b',
  muted4: '#a29c90',
  muted5: '#b0aa9e',
  cardSoft: '#faf8f4',
  inputBg: '#fbf9f5',
  warnBg: '#fff5e8',
  warnBorder: '#f2ddc0',
  warnText: '#8a6a3a',
  trayBg: '#e7f4ee',
  trayBorder: '#b9dcce',
};

export function sectionStyle(unlocked) {
  return {
    padding: '36px 0 0',
    transition: 'opacity .3s ease',
    opacity: unlocked ? 1 : 0.35,
    pointerEvents: unlocked ? 'auto' : 'none',
  };
}

export function stepButtonStyle(enabled) {
  return {
    marginTop: 14,
    width: '100%',
    padding: 13,
    borderRadius: 8,
    border: enabled ? '2px solid #1c1b18' : '2px solid transparent',
    boxShadow: enabled ? '3px 3px 0 #1c1b18' : 'none',
    fontWeight: 600,
    background: enabled ? '#19b083' : '#e8e4dc',
    color: enabled ? '#fff' : '#b0aa9e',
    fontSize: 14,
    fontFamily: 'inherit',
    cursor: enabled ? 'pointer' : 'not-allowed',
    transition: 'transform .12s ease, box-shadow .12s ease, background .15s ease',
  };
}

// Website wallpaper: faint diagonal stripes with the slightest green tinge. Shared by the website and the iOS app.
export const wallpaper = 'repeating-linear-gradient(45deg, transparent 0 10px, rgba(25,176,131,.06) 10px 11.5px)'
