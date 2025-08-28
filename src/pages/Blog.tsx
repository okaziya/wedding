import upperOrnamentImage from "/images/lm-ornament-upper.png";
import lowerOrnamentImage from "/images/lm-ornament-lower.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Blog = () => {
  return (
    <div className="min-h-screen pt-24 px-4 bg-wedding-background pb-20">
      <div className="max-w-[900px] mx-auto">
        <div className="flex flex-col items-center mb-12">
          <img src={upperOrnamentImage} alt="Upper ornamet image" width={328} />
          <h1 className="font-satisfy text-4xl md:text-5xl text-center text-[#571E25] py-4">Blog</h1>
          <img src={lowerOrnamentImage} alt="Lower ornamet image" width={174} />
        </div>

        <div className="space-y-1">
          <article className="bg-white px-6 md:px-[64px] py-[48px]">
            <div className="relative">
              <img
                src="/wedding/images/lm-ornament-flower.svg"
                alt="Decorative flower"
                className="w-6 h-auto mx-auto mb-4"
              />
              <time className="font-satisfy text-2xl text-[#B14B57] text-center block mb-5">August 28th, 2025</time>
              <h2 className="font-merriweather text-2xl font-bold text-center mb-4 text-[#571E25]">
                Photo books distributed and digital photos available! 🙂
              </h2>
              <p className="font-merriweather text-gray-600 text-center mb-6">
                Our photographer Lena has captured beautiful moments from our celebration. Once you've been granted
                access, you can view them in the Google Photos albums below:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <a
                    href="https://photos.google.com/share/AF1QipM9YjJjCvEWtxVTXszFTyyE0LHCVJlYReAydNstF9Y81hHMJ3Eom70SNBlBphqZrQ"
                    className="inline-block bg-[#B14B57] hover:bg-[#571E25] text-white px-4 py-2 font-merriweather text-sm transition-colors rounded mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Part 1 - Print Quality
                  </a>
                  <p className="font-merriweather text-gray-500 text-xs">High-resolution photos</p>
                </div>

                <div className="text-center">
                  <a
                    href="https://photos.google.com/share/AF1QipP2DEF-a3iu1D9VxpOLjKszT_ggg_LSJckTs-QmOx2ZSdBus6L-s7wJZVfaTkM1nQ"
                    className="inline-block bg-[#B14B57] hover:bg-[#571E25] text-white px-4 py-2 font-merriweather text-sm transition-colors rounded mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Part 1 - Web Quality
                  </a>
                  <p className="font-merriweather text-gray-500 text-xs">Optimized for viewing</p>
                </div>

                <div className="text-center">
                  <a
                    href="https://photos.google.com/share/AF1QipMdUklYXDwHphCFMHwBG5c-QlJ9T1zBLvMukVuO-FR93acrO9c1rLEPvGDD4wN_hA"
                    className="inline-block bg-[#B14B57] hover:bg-[#571E25] text-white px-4 py-2 font-merriweather text-sm transition-colors rounded mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Part 2 - Print Quality
                  </a>
                  <p className="font-merriweather text-gray-500 text-xs">High-resolution photos</p>
                </div>

                <div className="text-center">
                  <a
                    href="https://photos.google.com/share/AF1QipMPqA8DqkAzXxXcHXHGApcaknO6ROHItO1BYFI67ZT1GOQUCrOCU8cNuuJ6GqUB2Q"
                    className="inline-block bg-[#B14B57] hover:bg-[#571E25] text-white px-4 py-2 font-merriweather text-sm transition-colors rounded mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Part 2 - Web Quality
                  </a>
                  <p className="font-merriweather text-gray-500 text-xs">Optimized for viewing</p>
                </div>
              </div>

              <div className="bg-[#FAF7F1] p-4 rounded border">
                <p className="font-merriweather text-gray-600 text-sm text-center">
                  If you are not logged in with a Google/YouTube account that is granted access to the photo albums, the
                  links above will only take you to a "404 Not Found" page. Send Mats or Liza the email address
                  associated with your account, then visit{" "}
                  <a
                    href="https://photos.google.com/updates"
                    className="text-[#571E25] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://photos.google.com/updates
                  </a>{" "}
                  to make sure you're authenticated and granted access, and <strong>only then</strong> you can open the
                  photo album links successfully.
                </p>
                <p className="font-merriweather text-gray-600 text-sm text-center mt-3">
                  <strong>Note</strong>: If you have some event photos you would like to have added to a shared album
                  here, send them to Liza and ask for a blog update featuring your album!
                </p>
              </div>
            </div>
          </article>

          <article className="bg-white px-6 md:px-[64px]  py-[48px]">
            <div className="relative">
              <img
                src="/wedding/images/lm-ornament-flower.svg"
                alt="Decorative flower"
                className="w-6 h-auto mx-auto mb-4"
              />
              <time className="font-satisfy text-2xl text-[#B14B57] text-center block mb-5">May 1st, 2025</time>
              <h2 className="font-merriweather text-2xl font-bold text-center mb-4 text-[#571E25]">
                Wedding dinner planning finalized + travel plans documented
              </h2>
              <p className="font-merriweather text-gray-600 text-center mb-4">
                We re-visited Roddens Hus to do some research with the meals catering and conducted real-world
                simulations with table arrangements. We also updated participant pages for Dima & Anna, Boris, and
                Yongtao with respect confirmed travel plans. Additionally, we added an introduction to traditional
                Dalarna folk dancing to the schedule.
              </p>
              <div className="mt-6">
                <AspectRatio ratio={4 / 3} className="overflow-hidden rounded-lg">
                  <img
                    src="/wedding/images/our-story/250501.jpeg"
                    alt="Planning dinner with catering company"
                    className="object-cover w-full h-full border-[5px] border-solid border-white rounded-[2px]"
                  />
                </AspectRatio>
              </div>
            </div>
          </article>

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
