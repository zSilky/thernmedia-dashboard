export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbz3uktahkTIPltiYfsEKLeXnzRexY6fVCROu-H3LjHvpxqQK-9RQGeIlaVZ5W_TMxojMQ/exec');
    const data = await response.json();
    // data is now an object with sheet names as keys
    // Return it directly so dashboard can use all sheets
    res.status(200).json(data);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
}