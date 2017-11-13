import { Meteor } from 'meteor/meteor';

Meteor.methods({
    'getData'() {
        return [
            {_id: 1},
            {_id: 2},
            {_id: 3},
        ]
    }
});

