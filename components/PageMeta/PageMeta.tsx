import Head from "next/head";

type PageMetaProps = {
  title: string;
  description: string;
};

export const PageMeta = ({ title, description }: PageMetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
};
