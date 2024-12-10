'use client'

// process.env. is another way of saying import this
const distributionId = process.env.NEXT_PUBLIC_CF_DISTRIBUTION_ID;


export default function customImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
    return `https://${distributionId}.cloudfront.net/out${src}?w=${width}&q=${quality || 75}`;

}
