declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string;
            DEBUG: string;
        }
    }
}

export interface Environment {
    name: string;
    debug: boolean;
}

export class Environment implements Environment {
    constructor(env: NodeJS.ProcessEnv = process.env) {
        this.name = env.NODE_ENV;
        this.debug = !!env.DEBUG;
        Object.freeze(this);
    }
}

export default new Environment();
