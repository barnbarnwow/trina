import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="md:flex md:flex-row min-h-screen items-center justify-evenly px-9 md:p-9">
        <div className="md:block md:basis-2/5">
          <img
            src="/generichair.jpg"
            alt="Trina"
            className="rounded-xl object-cover aspect-1/1 md:h-screen"
          />
        </div>
        <div className="block md:basis-2/5">
          <h1 className="text-3xl font-bold my-3">
            Welcome to my (Trina&apos;s) website!
          </h1>
          <p className="my-3 text-lg">
            Hi, I&apos;m Trina—a hairstylist with a passion for helping people
            see their own beauty. Whether it&apos;s a bold new look or a subtle
            refresh, I love creating styles that bring out confidence and joy.
            For me, hair isn&apos;t just about trends—it&apos;s about
            transformation, empowerment, and a little bit of fun along the way.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
