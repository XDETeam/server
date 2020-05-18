import Link from "next/link";

export const Page = () => (
    <>
        <h1>Web development</h1>

        <h2>CSS</h2>
        <ul>
            <li>
                <Link href="/spec/normalize-css">
                    <a>Normalize.css</a>
                </Link>
            </li>
            <li>
                <Link href="/spec/post-css">
                    <a>Post CSS</a>
                </Link>
            </li>
            <li>
                <Link href="/spec/pre-processor-css">
                    <a>CSS Pre-processor</a>
                </Link>
            </li>
        </ul>

        <h2>SSR/SSG</h2>
        <ul>
            <li>
                <Link href="/spec/next-js">
                    <a>Next.js</a>
                </Link>
            </li>
        </ul>
    </>
);

export default Page;