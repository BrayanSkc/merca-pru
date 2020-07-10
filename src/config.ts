let env = process.env.REACT_APP_ENV;

function onEnvVariables() {
    switch (env) {
        case 'dev':
            return {
                URLBACKEND: `https://api.mercabot.co`
            };
        case 'prod':
            return {
                URLBACKEND: `https://api.mercabot.co`
            }
    }
}
export const configEnv = onEnvVariables()