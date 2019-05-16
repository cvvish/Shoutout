import { raiseStatus, HTTP } from '../scripts/Http';

const getDummyDataService = () =>
fetch("http://localhost:9000/testAPI", {
method: HTTP.GET,
credentials: 'cross-origin',
}).then(raiseStatus);

export default getDummyDataService ;
