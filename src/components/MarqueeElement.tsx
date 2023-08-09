interface Props {
  style: string,
  content: string
}
export default function MarqueeElement({ style, content }: Props, ) {
  return (
    <>
      <li className={style}>{content}</li>
      <li className={style}>*</li>
    </>
  );
}
