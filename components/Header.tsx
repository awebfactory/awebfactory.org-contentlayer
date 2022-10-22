import Link from "next/link"

function Logo() {
  return (
    <Link href="/">
      <a className="inline-flex justify-center items-center">
        <span className="font-bold text-orange-peel-500">
          <img
            width="150"
            height="41"
            title="AWebFactory.org"
            alt="AWebFactory.org"
            src="/images/logo.png"
          />
        </span>
      </a>
    </Link>
  )
}

export function Header() {
  return (
    <header className="p-8 flex justify-center">
      <Logo />
    </header>
  )
}
