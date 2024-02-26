declare module 'rehype-pretty-code' {
  import { Plugin } from 'unified';

  interface Options {
    theme: string;
  }

  const rehypePrettyCode: Plugin<[Options?]>;

  export = rehypePrettyCode;
}
