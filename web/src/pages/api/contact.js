export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validate data
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Send data to WordPress endpoint
    const response = await fetch(
      "http://localhost//landingPage/wp-json/promise/v1/contact-form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      }
    );

    if (response.ok) {
      res.status(200).json({ message: "Form submitted successfully" });
    } else {
      res.status(500).json({ error: "Error submitting form" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
