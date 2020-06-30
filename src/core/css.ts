type CSSMeta = string;

type CSSProperties = {
  [key: string]: string | number | CSSProperties;
};

export default function css(
  _strings: TemplateStringsArray,
  ..._exprs: Array<string | number | CSSProperties | CSSMeta>
): string {
  console.log(_strings);
}
