
import './Background.scss';
export default function Background() {
  return <div id='background'>
    <svg id='background-bl' viewBox='0 0 1000 1000' fill='black' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='500' cy='500' r='500' />
    </svg>
    <svg id='background-tr' viewBox='0 0 1000 1000' fill='black' xmlns='http://www.w3.org/2000/svg'>
      <polygon points='1000,0 1000,1000 0,900' />
    </svg>
  </div>
}
