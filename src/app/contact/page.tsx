export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p>Feel free to reach out via the following methods:</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Email: yourname@example.com</li>
        <li>GitHub: <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">yourusername</a></li>
        <li>Twitter: <a href="https://twitter.com/yourusername" className="text-blue-500 hover:underline">@yourusername</a></li>
      </ul>
    </div>
  );
}