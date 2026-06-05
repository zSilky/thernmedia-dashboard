export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxBLoqqD41Hcwxqyr2jrwAGAlEMNlYemZ8_Mg9lo3xDLRMHpWXKgGRxeLfunfxv5Dr0ew/exec');
    const data = await response.json();
    const filtered = data.filter((row, i) => i === 0 || (row[0] && String(row[0]).trim() !== ''));
    res.status(200).json(filtered);
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
}