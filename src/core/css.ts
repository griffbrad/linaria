import { StyledMeta } from '../types';

type CSSProperties = {
  [key: string]: string | number | CSSProperties;
};

export default function css(
  _strings: TemplateStringsArray,
  ..._exprs: Array<string | number | CSSProperties | StyledMeta>
): string {
  console.log(_strings);
}
