import FadeIn from "@/components/fadein";
import MaskText from "@/components/maskText";
import Splash from "@/components/splash";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Button from "@/components/ui/button";
import MiText from "@/components/ui/miText";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import HomeSplash from "../assets/home/home_splash.png";

import { articles } from "@/data/articles";

const Blog = () => {
  const article = articles[0]; // Replace with your logic to select an article
  return (
    <>
      <Helmet>
        <title>Blog · Xiaomi</title>
      </Helmet>
      <main className="flex flex-col gap-48">
        <Splash src={articles[5].pic} alt="Xiaomi Smart Air Purifier 4">
          <div className="flex min-h-svh w-full items-start justify-end px-4 py-12 md:px-16 md:py-32">
            <div className="flex max-w-lg flex-col items-center gap-8 rounded-2xl bg-white px-9 py-7 text-left">
              <MaskText variant="splash" text={articles[5].title} />
              <p className="flex w-full items-start">{articles[5].date}</p>
              <MiText className="font-medium text-slate-800">
                Transform your home into a sanctuary with these essentials for a
                cleaner, healthier environment. From air purifiers to natural
                cleaning, discover what you need.
              </MiText>
              <Button asChild className="flex items-center">
                <Link to="/product">Discover More</Link>
              </Button>
            </div>
          </div>
        </Splash>
        <div className="max-w-3xl px-4 md:px-16">
          <MaskText
            variant="header"
            text="Introducing Smart Air Purifier 4"
            className="mb-8"
          />
          <MiText>
            Designed to tackle indoor air pollution head-on and ensure that
            every breath you take is pure and healthy.
          </MiText>
        </div>
        {/* <div className="h-[200vh]"></div> */}

        <section className="mb-48 flex flex-col items-start px-4 md:px-16">
          <MaskText
            variant="header"
            text="Latest Articles"
            className={`mb-8`}
          />
          <FadeIn>
            <div className="mb-16 grid w-full grid-cols-1 gap-16 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {articles.map((article, index) => (
                <div key={index}>
                  <Link to={`/article/${index}`}>
                    <AspectRatio ratio={3 / 2} className="mb-6">
                      <img
                        src={article.pic}
                        alt={article.title}
                        className="size-full rounded-3xl object-cover"
                      />
                    </AspectRatio>
                    <h6 className={`mb-2 font-display text-2xl font-semibold`}>
                      {article.title}
                    </h6>
                    <p>{article.date}</p>
                  </Link>
                </div>
              ))}
            </div>
          </FadeIn>
        </section>
      </main>
    </>
  );
};

export default Blog;
