import hello from './hello.html';
import styles from './hello.m.css';
import message, {message_two} from './message.html';
import './hello_message.html';

// Make sure to export the component so that it can be accessed by importing the js file (see import in main.js)
export default hello;

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
