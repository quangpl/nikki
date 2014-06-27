/**
 * This module simply defines keyboard actions
 * to be performed on certain keyboard shortcuts.
 *
 * @type {exports}
 */
var state           = require('./state');
var keyboard        = require('./keyboard');
var bar             = require('./bar');
var search          = require('./search');
var editor          = require('./editor');

module.exports = function(socket) {
    /**
     * Save file
     */
    keyboard.on('ctrl + s', function() {
        bar.alert('Saving...');
        state.openFile.data = editor.getValue();

        socket.emit('resource.save', state.openFile);
        return false;
    });

    /**
     * Switch focus
     */
    keyboard.on('ctrl + shift + x', function() {
        var focus = 'tab';

        if (state.focus === 'tab') {
            focus = 'fs';
        }

        state.switchFocus(focus);
    });

    /**
     * Local search
     */
    keyboard.on('ctrl + shift + f', function() {
        search.toggle();

        return false;
    });

    /**
     * Global search
     */
    keyboard.on('ctrl + f', function() {
        search.toggle(true);

        return false;
    });

    /**
     * Down arrow
     */
    keyboard.on('down', function() {
        if (state.focus === 'fs') {
            var resource = $('.resource.active');
            var canGoDown = resource.next().hasClass('resource');

            if (canGoDown) {
                resource.removeClass('active');
                resource.next().addClass('active');
            } else {
                bar.alert("Where ya goin?")
            }

            return false;
        }
    });

    /**
     * Up arrow
     */
    keyboard.on('up', function() {
        if (state.focus === 'fs') {
            var resource = $('.resource.active');
            var canGoDown = resource.prev().hasClass('resource');

            if (canGoDown) {
                resource.removeClass('active');
                resource.prev().addClass('active');
            } else {
                bar.alert("Where ya goin?")
            }

            return false;
        }
    });

    /**
     * Open files / directories
     */
    keyboard.on('space', function() {
        if (state.focus === 'fs') {
            var resource = $('.resource.active');

            if (resource) {
                socket.emit('resource.open', JSON.parse(resource.attr('data-resource')))
            }

            return false;
        }
    });
};