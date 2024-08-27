import Link from "next/link";

export const Nav = () => {
    return (
        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">
                Logout
            </Link>
        </div>
    );
};
