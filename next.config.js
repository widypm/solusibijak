/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  reactStrictMode: true,
  apps: [
    {
        name: "boii",
        script: "node_modules/next/dist/bin/next",
        args: "start -p 80", //running on port 80
        watch: false,
    },
  ],  
}

module.exports = nextConfig
