import Icon, { EIcon } from './Icon';

import './StatsBar.scss';
function Stat({
  icon,
  number,
  label,
}: {
  icon: EIcon,
  number: number;
  label: string;
}) {
  return <div className='stats-bar-entry'>
    <Icon name={icon} />
    <div className='stats-bar-info'> 
      <span className='stats-bar-number'>{ number }</span>
      <label>{ label }</label>
    </div>
  </div>
}

export default function StatsBar() {
  const students = 500;
  const active = 200;

  return <div className='stats-bar'>
    <Stat icon='email' number={students} label='Students' />
    <Stat icon='key' number={active} label='Active Students' />
  </div>
}