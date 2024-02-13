import classes from './App.module.scss';
import { Logo } from '@/components/Logo';

export function App() {
  return (
    <div className={classes.App}>
      Hello, world!!!
      <Logo />
    </div>
  );
}
