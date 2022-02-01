import Link from "next/link";

export const Page = () => (
    <>
        <h1>Software design</h1>

        <h2>Principles</h2>
        <ul>
            <li>
                <Link href="/spec/solid-software-design">
                    <a>SOLID design principles</a>
                </Link>
            </li>
        </ul>

        <h2>Design patterns</h2>
        <ul>
            <li>
                <Link href="/spec/singleton-design-pattern">
                    <a>Singleton</a>
                </Link>
            </li>
        </ul>
    </>
);

export default Page;
