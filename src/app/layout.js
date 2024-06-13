import "./styles/_globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Christian Historillo</title>
        <meta
          name="description"
          content="I thrive on turning ideas into digital reality - with a blend of creativity and technical prowess, I craft seamless web experiences that captivate and engage users."
        />
        <meta property="og:title" content="Christian Historillo" />
        <meta
          property="og:description"
          content="I thrive on turning ideas into digital reality - with a blend of creativity and technical prowess, I craft seamless web experiences that captivate and engage users."
        />
        <meta property="og:image" content="image_url_here" />
      </head>
      <body>{children}</body>
    </html>
  );
}
