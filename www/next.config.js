/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,

	output: "export",

	experimental: {
		appDir: true,
		scrollRestoration: true,
	}
}

module.exports = nextConfig
