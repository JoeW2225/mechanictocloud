export default function customImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
    return `https://dcwua42m3tnbq.cloudfront.net/out${src}?w=${width}&q=${quality || 75}`;

}
