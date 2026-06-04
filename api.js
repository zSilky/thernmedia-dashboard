export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  try {
    const url = 'https://script.google.com/macros/s/AKfycbxBLoqqD41Hcwxqyr2jrwAGAlEMNlYemZ8_Mg9lo3xDLRMHpWXKgGRxeLfunfxv5Dr0ew/exec';
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
