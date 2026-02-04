export default function Navbar() {
    return (
    <nav>
        <div class="flex p-4 items-center justify-between bg-red-900 text-amber-50 h-14">
            <a class="hover:underline">Home</a>
            <ul class="flex space-x-4">
                <li>
                    <a class="hover:underline">Events</a>
                </li>
                <li>
                    <a class="hover:underline">Donate</a>
                </li>
                <li>
                    <a class="hover:underline">About</a>
                </li>
            </ul>
        </div>
    </nav>
    );
}