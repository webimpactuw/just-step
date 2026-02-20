export default function Navbar() {
    return (
    <nav>
        <div className="flex p-4 items-center justify-between bg-red-900 text-amber-50 h-14">
            <a className="hover:underline">Home</a>
            <ul className="flex space-x-4">
                <li>
                    <a className="hover:underline">Events</a>
                </li>
                <li>
                    <a className="hover:underline">Donate</a>
                </li>
                <li>
                    <a className="hover:underline">About</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}