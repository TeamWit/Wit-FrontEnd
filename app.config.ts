import 'dotenv/config';

export default {
    expo: {
        name: 'wit-client-reactnative',
        slug: 'wit-client-reactnative',
        version: '1.0.0',
        scheme: 'wit',
        extra: {
            API_BASE_URL: process.env.API_BASE_URL,
        },
    },
};