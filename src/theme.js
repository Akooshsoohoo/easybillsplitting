export const colors = {
  bg: '#f2f7f4',
  text: '#12211c',
  green: '#19b083',
  greenDark: '#0e6b4f',
  greenHover: '#14a37f',
  borderLight: '#e4efea',
  borderMed: '#dceae4',
  borderStrong: '#cfe4da',
  divider: '#f0f6f3',
  muted1: '#6e857c',
  muted2: '#7b9189',
  muted3: '#8ba49b',
  muted4: '#9db3aa',
  muted5: '#a8bcb4',
  cardSoft: '#f6fbf9',
  inputBg: '#f9fcfb',
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
