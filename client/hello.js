import hello from './hello.html';
import styles from './hello.m.css';

hello.viewmodel({
  styles,
  counter: 0,
  incrementCounter() {
    this.counter(this.counter() + 1);
  }
});