import Head from 'next/head';

type PageMetaProps = {
  title: string;
  description: string;
};

export const PageMeta = ({ title, description }: PageMetaProps) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const ogImage = `${siteUrl}/ogp.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
    </Head>
  );
};
