import build_info from "../../public/build-info.json";
import upperOrnamentImage from "/images/lm-ornament-upper.png";
import lowerOrnamentImage from "/images/lm-ornament-lower.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Blog = () => {
  console.log(
    `Render Blog page with revision ${build_info.GITHUB_SHA_SHORT} (${build_info.COMMIT_URL}), built at ${build_info.BUILD_TIMESTAMP} by ${build_info.GITHUB_ACTOR}`
  );
  return (
    <div className="min-h-screen pt-24 px-4 bg-wedding-background pb-20">
      <div className="max-w-[900px] mx-auto">
        <div className="flex flex-col items-center mb-12">
          <img src={upperOrnamentImage} alt="Upper ornamet image" width={328} />
          <h1 className="font-satisfy text-4xl md:text-5xl text-center text-[#571E25] py-4">Blog</h1>
          <img src={lowerOrnamentImage} alt="Lower ornamet image" width={174} />
        </div>

        <div className="space-y-1">
          <article className="bg-white px-6 md:px-[64px]  py-[48px]">
            <div className="relative">
              <img
                src="/wedding/images/lm-ornament-flower.svg"
                alt="Decorative flower"
                className="w-6 h-auto mx-auto mb-4"
              />
              <time className="font-satisfy text-2xl text-[#B14B57] text-center block mb-5">February 20th, 2025</time>
              <h2 className="font-merriweather text-2xl font-bold text-center mb-4 text-[#571E25]">
                First batch of invites sent via mail
              </h2>
              <p className="font-merriweather text-gray-600 text-center mb-4">
                We received all prints from the supplier, prepared all invitation letters, and handed over the first
                batch to the post office.
              </p>
              <div className="mt-6">
                <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
                  <img
                    src="/wedding/images/our-story/250220.jpeg"
                    alt="Invitation letters"
                    className="object-cover w-full h-full border-[5px] border-solid border-white rounded-[2px]"
                  />
                </AspectRatio>
              </div>
            </div>
          </article>

          <article className="bg-white px-6 md:px-[64px] py-[48px]">
            <div className="relative">
              <img
                src="/wedding/images/lm-ornament-flower.svg"
                alt="Decorative flower"
                className="w-6 h-auto mx-auto mb-4"
              />
              <time className="font-satisfy text-2xl text-[#B14B57] text-center block mb-5">February 17th, 2025</time>
              <h2 className="font-merriweather text-2xl font-bold text-center mb-4 text-[#571E25]">
                Initial designs by @mkl-adsn finalized
              </h2>
              <p className="font-merriweather text-gray-600 text-center mb-4">
                We finalized the area map, invitation cards, new logo, and app installation instructions for print and
                distribution. Designs contributed by{" "}
                <a
                  href="https://github.com/mkl-adsn"
                  className="text-[#571E25] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @mkl-adsn
                </a>
                .
              </p>
            </div>
          </article>

          <article className="bg-white px-6 md:px-[64px] py-[48px]">
            <div className="relative">
              <img
                src="/wedding/images/lm-ornament-flower.svg"
                alt="Decorative flower"
                className="w-6 h-auto mx-auto mb-4"
              />
              <time className="font-satisfy text-2xl text-[#B14B57] text-center block mb-5">February 6th, 2025</time>
              <h2 className="font-merriweather text-2xl font-bold text-center mb-4 text-[#571E25]">
                All participant pictures and descriptions put in place
              </h2>
              <p className="font-merriweather text-gray-600 text-center mb-4">
                We completed the last participant details for the scope of our big event; everyone now has a picture, a
                welcome message, and a short description for other participants to read.
              </p>
            </div>
          </article>

          <article className="bg-white px-6 md:px-[64px] py-[48px]">
            <div className="relative">
              <img
                src="/wedding/images/lm-ornament-flower.svg"
                alt="Decorative flower"
                className="w-6 h-auto mx-auto mb-4"
              />
              <time className="font-satisfy text-2xl text-[#B14B57] text-center block mb-5">January 19th, 2025</time>
              <h2 className="font-merriweather text-2xl font-bold text-center mb-4 text-[#571E25]">
                Made Liza+Mats app installable on iPhone/Android
              </h2>
              <p className="font-merriweather text-gray-600 text-center mb-4">
                Today we completed a series of updates that makes the wedding event app installable on your
                Android/iPhone home screen. Please see setup instructions for{" "}
                <a
                  href="https://github.com/okaziya/wedding/blob/main/docs/android.md"
                  className="text-[#571E25] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Android here
                </a>{" "}
                and instructions for{" "}
                <a
                  href="https://github.com/okaziya/wedding/blob/main/docs/apple.md"
                  className="text-[#571E25] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iPhone here
                </a>
                .
              </p>
            </div>
          </article>

          <article className="bg-white px-6 md:px-[64px] py-[48px]">
            <div className="relative">
              <img
                src="/wedding/images/lm-ornament-flower.svg"
                alt="Decorative flower"
                className="w-6 h-auto mx-auto mb-4"
              />
              <time className="font-satisfy text-2xl text-[#B14B57] text-center block mb-5">January 18th, 2025</time>
              <h2 className="font-merriweather text-2xl font-bold text-center mb-4 text-[#571E25]">
                Mats & Liza getting started programming
              </h2>
              <p className="font-merriweather text-gray-600 text-center mb-4">
                Today we built an embryo of something for the wedding. We promise that the URL won't change!
              </p>
              <div className="mt-4 text-center">
                <a
                  href="https://okaziya.github.io/wedding/"
                  className="text-[#571E25] hover:underline break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://okaziya.github.io/wedding/
                </a>
              </div>
              <div className="mt-6 flex justify-center">
                <img src="/wedding/images/gh-pages-qr.png" alt="QR Code to wedding website" className="w-48 h-48" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
