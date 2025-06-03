import Header from "../components/header";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-9">
        <h1 className="text-3xl font-bold my-3">Contact Trina</h1>
        <p className="my-3 text-lg max-w-2xl text-center">
          Hi, Im Trina—a hairstylist with a passion for helping people see their
          own beauty. Whether it’s a bold new look or a subtle refresh, I love
          creating styles that bring out confidence and joy. For me, hair isn’t
          just about trends—it’s about transformation, empowerment, and a little
          bit of fun along the way.
        </p>
      </main>
      <Footer />
    </>
  );
}
