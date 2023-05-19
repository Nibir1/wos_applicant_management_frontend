export type IconEntry = string | [ string, string ];

export const Icons = {
  'email':  'M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z',
  'key': 'M280 644q-28 0-48-20t-20-48q0-28 20-48t48-20q28 0 48 20t20 48q0 28-20 48t-48 20Zm0 172q-100 0-170-70T40 576q0-100 70-170t170-70q72 0 126 34t85 103h356l113 113-167 153-88-64-88 64-75-60h-51q-25 60-78.5 98.5T280 816Zm0-60q58 0 107-38.5t63-98.5h114l54 45 88-63 82 62 85-79-51-51H450q-12-56-60-96.5T280 396q-75 0-127.5 52.5T100 576q0 75 52.5 127.5T280 756Z',
} as const satisfies Record<string, Readonly<IconEntry>>;
export type EIcon = keyof typeof Icons;

export interface IconProps {
  name: EIcon;
}

export default function Icon({
  name,
}: IconProps) {
  let iconViewbox = '0 96 960 960';
  let iconPath = null;

  if(name in Icons) {
    if(Array.isArray(Icons[name])) {
      iconViewbox = Icons[name][0];
      iconPath = Icons[name][1];
    } else if(typeof Icons[name] === 'string') {
      iconPath = Icons[name];
    }
  } else {
    throw new TypeError(`Property "name" on Icon is invalid`);
  }

  return iconPath ? 
    (<svg className='icon' style={{ fill: 'currentcolor' }} viewBox={iconViewbox} xmlns='http://www.w3.org/2000/svg'>
      <path d={iconPath} />
    </svg>)
    :
    (<span>X</span>)
}
