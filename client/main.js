import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';

// Import html-only components directly:
import info from './info.html';

// Import components with a backing javascript file via the JS file:
// Make sure to export the component from the javascript file!
import hello from '/imports/client/hello/hello';

Template.body.helpers({
  hello,
  info
});
