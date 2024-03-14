import Image from "next/image";
import Typography from "@mui/material/Typography";

interface NavLogoProps {
    open?: boolean;
}

const NavLogo = ({
    open
}: NavLogoProps) => {
    return (
        <div className={`${!open ? ("flex") : "hidden"}`}>
            <Image
                src="/images/logo.png"
                alt="logo"
                width={35}
                height={35}
                loading="lazy"
                className='rounded-md border-[1px] border-white border-solid'
            />
            <Typography variant="h6" noWrap component="div" className="ml-4">
                Arics Finance
            </Typography>
        </div>
    )
}
export default NavLogo;