import Head from 'next/head'

export default function CommonMeta({
    title = 'SwiftUI Components',
    description = 'SwitUIで作られたコンポーネントをまとめたウェブサイトです。',
}) {
    const title_with_service = title !== 'SwiftUI Components' ? `${title} - SwiftUI Components` : 'SwiftUI Components'
    return (
        <Head>
            <title>{title_with_service}</title>
            <meta property="description" content={description} />
            <meta property="og:title" content={title_with_service} />
            <meta property="og:description" content={description} />
            <meta
                property="og:image"
                content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/ogp.png`}
            />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    )
}
