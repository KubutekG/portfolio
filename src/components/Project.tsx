export default function Project({
  name,
  img,
  description,
  isProjectOpen,
  setIsProjectOpen,
}: {
  name: string;
  img: string;
  description: string;
  isProjectOpen: boolean;
  setIsProjectOpen: () => void;
}) {
  const extendedShown: React.CSSProperties = {
        height: '90vh',
        width: '90vw',
        backgroundColor: 'red',
        top: '50%',
        left: '50%',
        position: 'fixed',
        transform: 'translateY(-50%) translateX(-50%)',
        zIndex: 2,
  }
  const extendedHidden = {
    display: 'none'
  }
  return (
    <div className="project" onClick={setIsProjectOpen}>
      <div className="project-img-desc-wrap">
        <img src={img} />
        <h2>
          {description} {name}
        </h2>
      </div>
      <div className="project-extended" style={isProjectOpen ? extendedShown : extendedHidden}>

      </div>
    </div>
  );
}
