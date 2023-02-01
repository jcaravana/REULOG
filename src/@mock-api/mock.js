import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mock = new MockAdapter(axios, { delayResponse: 0, onNoMatch: 'passthrough' });
const savedMockAdapter = axios.defaults.adapter;
axios.defaults.adapter = mock.originalAdapter;
export { mock as default, axios, savedMockAdapter };
