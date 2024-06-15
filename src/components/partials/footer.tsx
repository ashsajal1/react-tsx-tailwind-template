export default function Footer() {
  return (
    <footer className="p-2 text-center border-t dark:bg-black dark:text-light dark:border-t-gray-800">
        &copy; All rights reserved, Company {new Date().getFullYear()}
    </footer>
  )
}
