import { IconContext } from "react-icons";

interface ReactIconProps {
  icon: React.ReactNode;
  className?: string;
}

const ReactIcon = ({ icon, className }: ReactIconProps) => {
  return (
    <IconContext.Provider
      value={{
        className: className ? className : "",
      }}
    >
      {icon}
    </IconContext.Provider>
  );
};
export default ReactIcon;
