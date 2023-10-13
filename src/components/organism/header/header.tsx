import { NavbarTop } from "@/components/molecules/navbartop/navbartop";
import { NavbarBottom } from "@/components/molecules/navbarbottom/navbarbottom";
import { NavbarResponsive } from "@/components/molecules/navbarresponsive/navbarresponsive";

export const Header = () => {
    return (
<>
<header className="fixed font-gilroy">
    <NavbarTop />
    <NavbarBottom />
    <NavbarResponsive />
</header>      
</>
)}