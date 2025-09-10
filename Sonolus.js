export default function handler(req, res) {
  if (req.url === '/sonolus/info') {
    res.status(200).json({
      title: "My Sonolus Server",
      banner: "https://example.com/banner.jpg",
      background: "https://example.com/background.jpg",
      description: "Welcome to my custom Sonolus server!"
    })
  } else {
    res.status(404).json({ error: "Not Found" })
  }
}
