import * as _env from '!!sass-variable-loader!./env.scss';

interface Env {
  hello: string;
  xxx: string;
}

console.log('index.ts..()', _env);

export const env: Env = _env as Env;