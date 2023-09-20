import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="text-5xl mb-10">Not Found</div>
            <p>
                Could not find requested resource.{" "}
                <Link href="/" className="text-blue-500">
                    Return Home
                </Link>
            </p>
        </div>
    );
}
