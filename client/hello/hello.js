import hello from './hello.html';
import styles from './hello.m.css';
import message, {message_two} from './message.html';

hello.helpers({
  message,
  message_two
});

hello.viewmodel({
  styles,
  counter: 0,
  incrementCounter() {
    this.counter(this.counter() + 1);
  }
});