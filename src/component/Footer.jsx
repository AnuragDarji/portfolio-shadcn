export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © {currentYear} Anurag Darji. All rights reserved.
        </div>
      </div>
    </footer>
  );
}