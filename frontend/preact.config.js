import Dotenv  from 'dotenv-webpack'
export default (config) => {
    config.plugins.push(new Dotenv({path: "./.env"}));
}
