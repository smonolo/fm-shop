import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {}

const millionConfig = {
  auto: {
    rsc: true,
  },
}

export default million.next(nextConfig, millionConfig)
