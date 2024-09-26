import "./styles/_globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Christian Historillo</title>
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
          content={`https://public.boxcloud.com/api/2.0/internal_files/1657221369576/versions/1823062535976/representations/jpg_paged_2048x2048/content/1.jpg?access_token=1!u7dnM1Lz0t2B73ZWc5tQ-RZ5SEjRvb_foT8tB_al9to_lL1cq5OcYYNWaRvws0lbiD43mKk_atSNBJ3YvZ0MbbOgfcdzbND1MPOfuNjLXj_1xNpR_2or1EdL30FoLtQSLWvfGepTedVwwhE10UJkRif9U6NeuNSUOs8Bi5B6wuyd0-3c_eP5oSc95pmUDvlkizEsmhYKPLo0RuWHWfX5JVsnr4FBHlMM6fzL8PbDIGdQCZkLNFsCazz4uMY5lIpIeBJhI51-6YphYygmA8w6o6Xk-caCYEF1-lTlNDY4NUpIOZt-fnKDNTb4RWV4SrLA0wVRhU9nCZjNs9EZT3fXSSv7AUjIbPDSgZR74MVm4uflXYW4bw7wbkroOAUeEbb1X-v-IsS1g5jvOyIocB6ShL9BY3izFJ-wEAPpTCcC8bikZhdJzFDzjGQA6JA1sL_mjcUp6e6Iu1Auwu_O6ajD1F25eTYGwcwcXEJAhezF-v1aAZRSeMYdPyIsx_LWcykCN8LpQeXRKpS3nozxgQMvQxyW2OlynG3mXcJcVjgp7861IbMmWo0MmjDuSl2h6q77jm4kjC0Flb8h3kTZEKWAEdqghyI7o-1OXvaVRe2VrP5Pt3fbcbHe1i-OtoAz4d-slM6EDCHrEjtRaETO8aLQ8sO9Tj2sJmg_wmtmPoVEWJf7_k9Rvaq24LAkfFS8xd-B42maj4qiINrzB40V5vXaqKbERwQ.&box_client_name=box-content-preview&box_client_version=2.109.0`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@tristaan1204" />
        <meta name="twitter:site" content="@tristaan1204" />
        <meta property="twitter:title" content="Christian Historillo" />
        <meta
          property="twitter:description"
          content="I thrive on turning ideas into digital reality - with a blend of creativity and technical prowess, I craft seamless web experiences that captivate and engage users."
        />
        <meta
          property="twitter:image"
          content={`https://public.boxcloud.com/api/2.0/internal_files/1657221369576/versions/1823062535976/representations/jpg_paged_2048x2048/content/1.jpg?access_token=1!u7dnM1Lz0t2B73ZWc5tQ-RZ5SEjRvb_foT8tB_al9to_lL1cq5OcYYNWaRvws0lbiD43mKk_atSNBJ3YvZ0MbbOgfcdzbND1MPOfuNjLXj_1xNpR_2or1EdL30FoLtQSLWvfGepTedVwwhE10UJkRif9U6NeuNSUOs8Bi5B6wuyd0-3c_eP5oSc95pmUDvlkizEsmhYKPLo0RuWHWfX5JVsnr4FBHlMM6fzL8PbDIGdQCZkLNFsCazz4uMY5lIpIeBJhI51-6YphYygmA8w6o6Xk-caCYEF1-lTlNDY4NUpIOZt-fnKDNTb4RWV4SrLA0wVRhU9nCZjNs9EZT3fXSSv7AUjIbPDSgZR74MVm4uflXYW4bw7wbkroOAUeEbb1X-v-IsS1g5jvOyIocB6ShL9BY3izFJ-wEAPpTCcC8bikZhdJzFDzjGQA6JA1sL_mjcUp6e6Iu1Auwu_O6ajD1F25eTYGwcwcXEJAhezF-v1aAZRSeMYdPyIsx_LWcykCN8LpQeXRKpS3nozxgQMvQxyW2OlynG3mXcJcVjgp7861IbMmWo0MmjDuSl2h6q77jm4kjC0Flb8h3kTZEKWAEdqghyI7o-1OXvaVRe2VrP5Pt3fbcbHe1i-OtoAz4d-slM6EDCHrEjtRaETO8aLQ8sO9Tj2sJmg_wmtmPoVEWJf7_k9Rvaq24LAkfFS8xd-B42maj4qiINrzB40V5vXaqKbERwQ.&box_client_name=box-content-preview&box_client_version=2.109.0`}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
