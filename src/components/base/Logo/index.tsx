interface LogoPropTypes {
  mode?: "light" | "dark";
}

const Logo = ({
  mode = "dark",
}: LogoPropTypes) => {
  return (
    <h2 className="text-4xl font-sans font-bold italic">
      <span className={`${mode === "light" ? "text-green-400" : "text-gray-800"}`}>No</span>
      <span className={`${mode === "light" ? "text-white" : "text-primary"}`}>lancer</span>
    </h2>
  );
};
export default Logo;
