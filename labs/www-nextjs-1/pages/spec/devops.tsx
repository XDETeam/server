import Link from "next/link";

export const Page = () => (
    <>
        <h1>DevOps</h1>

        <h2>InBox</h2>
        <ul>
            <li>
                <Link href="/spec/ansible-automation">
                    <a>Ansible</a>
                </Link>
            </li>
            <li>
                <Link href="/spec/apt-package-tool">
                    <a>APT (Advanced Package Tool)</a>
                </Link>
            </li>
            <li>
                <Link href="/spec/docker-virtualization">
                    <a>Docker</a>
                </Link>
            </li>
            <li>
                <Link href="/spec/open-ssh-connectivity">
                    <a>OpenSSH</a>
                </Link>
            </li>
            <li>
                <Link href="/spec/vscode-ide">
                    <a>Visual Studio Code</a>
                </Link>
            </li>
            <li>
                <Link href="/spec/ubuntu-operating-system">
                    <a>Ubuntu</a>
                </Link>
            </li>
            <li>
                <Link href="/spec/windows-environment">
                    <a>Windows</a>
                </Link>
            </li>
            <li>
                <Link href="/spec/wsl-compatibility-layer">
                    <a>Windows Subsystem for Linux (WSL)</a>
                </Link>
            </li>
        </ul>
    </>
);

export default Page;
