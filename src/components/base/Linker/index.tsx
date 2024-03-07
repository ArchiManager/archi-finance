import Link from "next/link";

interface LinkerProps {
  href: string;
  value: string;
}

const Linker = ({ href, value }: LinkerProps) => {
  return (
    <Link href={href}>
      <span className="text-blue-700 hover:underline dark:text-blue-500">
        {value}
      </span>
    </Link>
  );
};
export default Linker;
