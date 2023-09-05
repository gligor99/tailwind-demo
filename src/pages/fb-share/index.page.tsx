import Head from 'next/head'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'next-share'

export default function FbShare() {
  return (
    <div>
      <Head>
        <title>Cool Title</title>
        <meta
          name="description"
          content="Testing the facebook share functionality"
          key="desc"
        />
        <link
          rel="canonical"
          href="https://tailwind-demo-murex.vercel.app/fb-share"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@rhapsody_media" />
        <meta
          name="twitter:image"
          content="https://www.storyofmathematics.com/wp-content/uploads/2022/11/2-1-Ratio.png"
        />
        <meta name="twitter:image:alt" content="something" />
        <meta
          name="og:url"
          property="og:url"
          content="https://tailwind-demo-murex.vercel.app/fb-share"
        />
        <meta name="og:title" property="og:title" content="Demo projects" />
        <meta
          name="og:description"
          property="og:description"
          content="Testing the facebook share functionality"
        />
        <meta
          name="og:image"
          property="og:image"
          content="https://www.storyofmathematics.com/wp-content/uploads/2022/11/2-1-Ratio.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="og:image:alt" property="og:image:alt" content="something" />
        <meta name="og:type" property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="container mx-auto max-w-[400px] pt-24">
        <h1 className="text-center"> Facebook Share </h1>
        <article className="mx-auto ">
          <div className="border-primary-500 flex items-center justify-center gap-4 rounded-full border p-3 md:gap-6 md:p-4">
            <FacebookShareButton url="https://tailwind-demo-murex.vercel.app/fb-share">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 12.073C24 5.446 18.627 0.072998 12 0.072998C5.373 0.072998 0 5.446 0 12.073C0 18.063 4.388 23.027 10.125 23.927V15.542H7.078V12.072H10.125V9.43C10.125 6.423 11.917 4.761 14.658 4.761C15.97 4.761 17.344 4.996 17.344 4.996V7.949H15.83C14.339 7.949 13.874 8.874 13.874 9.823V12.073H17.202L16.67 15.543H13.874V23.928C19.612 23.027 24 18.062 24 12.073Z"
                  fill="black"
                />
              </svg>
            </FacebookShareButton>
            <LinkedinShareButton url="https://tailwind-demo-murex.vercel.app/fb-share">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166L20.447 20.452ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"
                  fill="black"
                />
              </svg>
            </LinkedinShareButton>
            <TwitterShareButton url="https://tailwind-demo-murex.vercel.app/fb-share">
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.953 2.57C23.0545 2.9656 22.1026 3.22674 21.128 3.345C22.1541 2.72825 22.9224 1.76104 23.291 0.621996C22.34 1.177 21.286 1.581 20.164 1.806C19.4238 1.01443 18.4429 0.489417 17.3736 0.312497C16.3044 0.135577 15.2067 0.316646 14.2509 0.827586C13.2952 1.33853 12.5349 2.15075 12.0881 3.13812C11.6412 4.12549 11.533 5.23277 11.78 6.288C7.69 6.095 4.067 4.13 1.64 1.162C1.19879 1.91181 0.968664 2.76702 0.974 3.637C0.974 5.347 1.844 6.85 3.162 7.733C2.38086 7.70813 1.61697 7.49693 0.934 7.117V7.177C0.933557 8.31339 1.32627 9.41494 2.04551 10.2948C2.76474 11.1746 3.76621 11.7785 4.88 12.004C4.1583 12.1974 3.40241 12.2264 2.668 12.089C2.98412 13.067 3.59766 13.9219 4.42301 14.5345C5.24837 15.1471 6.24435 15.4867 7.272 15.506C5.53153 16.8719 3.38248 17.6133 1.17 17.611C0.78 17.611 0.391 17.588 0 17.544C2.25571 18.9883 4.87851 19.755 7.557 19.753C16.61 19.753 21.555 12.257 21.555 5.768C21.555 5.558 21.555 5.348 21.54 5.138C22.506 4.44286 23.3392 3.57981 24 2.59L23.953 2.57Z"
                  fill="black"
                />
              </svg>
            </TwitterShareButton>
          </div>
        </article>
      </div>
    </div>
  )
}
