import Link from "next/link";

export const Page = () => (
    <>
        <h1>SDE.Team</h1>

        <ul>
            <li>
                <Link href="/vision">Vision</Link>
            </li>
            <li>
                <Link href="/spec">Specs</Link>
            </li>
            <li>
                <Link href="/lab">Labs</Link>
            </li>
            <li>
                <Link href="/service">Services</Link>
            </li>
            <li>
                <Link href="/app">Application</Link>
            </li>
        </ul>
    </>
);

export default Page;
