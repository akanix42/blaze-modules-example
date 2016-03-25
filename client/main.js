import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import hello from './hello.html';
import info from './info.html';

Template.body.helpers({
  hello,
  info
});