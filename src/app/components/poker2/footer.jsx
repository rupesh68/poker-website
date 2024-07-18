import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 bg-gray-400 py-4 text-xl font-semibold text-muted-foreground ">
      <p>&copy; 2024 Poker Inc.</p>
      <Link href="#" className="hover:underline">
        Privacy Policy
      </Link>
      <Link href="#" className="hover:underline">
        Terms of Service
      </Link>
    </footer>
  );
}
