export default function ContactItem({
  name,
  src,
  link,
}: {
  name: string;
  src: string;
  link: string;
}) {
  return (
    <>
      <div className="contact-item">
        <div className="contact-item-name-wrap">
          <a href={link} target="_blank">
            <h2>{name}</h2>
          </a>
        </div>
        <a href={link} target="_blank">
          <img src={src} />
        </a>
      </div>
    </>
  );
}
