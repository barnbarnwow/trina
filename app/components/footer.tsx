export default function Footer() {
  return (
    <footer className="bg-zinc-600/20 text-white p-5">
      <div className="flex items-center justify-around">
        <p className="text-sm">© 2023 Trina's Website</p>
        <ul className="flex space-x-4">
          <li>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
