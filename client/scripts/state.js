/**
 * This module keeps track of the state
 * of the IDE.
 *
 * @type {{openFile: null}}
 */
var events  = require('./events');

var state   = {
  openFile: null,
  focus:    'fs',
  switchFocus: function(focus) {
    events.dispatch('state.focus.change', this);
    events.dispatch('state.focus.' + focus, this);

    this.focus = focus;
    $(document.activeElement).blur();
  }
}

events.on('resource.opened', function(resource){
  state.openFile = resource;
});

module.exports = state;