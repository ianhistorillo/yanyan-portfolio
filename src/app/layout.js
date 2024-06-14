import "./styles/_globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Christian Historillo</title>
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@tristaan1204" />
        <meta property="twitter:site" content="@tristaan1204" />
        <meta
          property="twitter:url"
          content="https://ianhistorillo.vercel.app/"
        />
        <meta
          name="description"
          content="I thrive on turning ideas into digital reality - with a blend of creativity and technical prowess, I craft seamless web experiences that captivate and engage users."
        />
        <meta property="og:title" content="Christian Historillo" />
        <meta
          property="og:description"
          content="I thrive on turning ideas into digital reality - with a blend of creativity and technical prowess, I craft seamless web experiences that captivate and engage users."
        />
        <meta
          property="og:image"
          content={`https://ianhistorillo-portfolio-image.s3.eu-north-1.amazonaws.com/public/img/metaimage-ian.jpg`}
        />
        <meta property="twitter:title" content="Christian Historillo" />
        <meta
          property="twitter:description"
          content="I thrive on turning ideas into digital reality - with a blend of creativity and technical prowess, I craft seamless web experiences that captivate and engage users."
        />
        <meta
          property="twitter:image"
          content={`https://ianhistorillo-portfolio-image.s3.eu-north-1.amazonaws.com/public/img/metaimage-ian.jpg`}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
