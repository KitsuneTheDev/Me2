export default function Navbar(): React.ReactNode {
    return(
        <nav className="h-full text-detail leading-page ">
            <ul className="h-full flex justify-center gap-card md:flex-col md:justify-start">
                <li className="h-fit">
                    <a href="#system-overview">System Overview</a>
                </li>
                <li className="h-fit">
                    <a href="#projects">Projects</a>
                </li>
                <li className="h-fit">
                    <a href="#blog">Blog</a>
                </li>
            </ul>
        </nav>
    );
}