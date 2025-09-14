// Aboutページ：自己紹介セクションを表示するシンプルなコンポーネント
export default function AboutPage() {
  return (
    <section className="space-y-6">
      {/* セクションの見出し */}
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        About Me
      </h1>

      {/* 自己紹介本文 */}
      <p className="text-gray-700 dark:text-gray-300">
        I&apos;m a frontend developer with a passion for building responsive and user-friendly web applications.
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        I have experience with technologies such as <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.
      </p>
    </section>
  );
}
