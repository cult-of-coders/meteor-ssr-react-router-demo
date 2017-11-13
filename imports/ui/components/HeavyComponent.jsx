import React from 'react';
import moment from 'moment';

export default (props) =>
    <div>
        This is a heavy component, ok maybe not that heavy, but it's just for prooving async imports:
        {moment().format('YYYY-MM-DD')}
    </div>