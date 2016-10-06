import _ from 'lodash';

const mirrorKeys = keys => _.zipObject(keys, keys);

export default mirrorKeys([
    'REST_GET',
    'REST_POST',
    'REST_PUT',
    'REST_DELETE',
]);
