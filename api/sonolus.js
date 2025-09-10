export default function handler(req, res) {
  res.status(200).json({
    title: "My Sonolus Server",
    banner: "https://example.com/banner.jpg",
    background: "https://example.com/background.jpg",
    description: "Welcome to my custom Sonolus server!"
  })
}
