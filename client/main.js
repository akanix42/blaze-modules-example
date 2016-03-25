import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import hello from './hello/hello.html';
import info from './info.html';

Template.body.helpers({
  hello,
  info
});
ViewModel.persist = false;