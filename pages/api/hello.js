export default function handler(req, res) {
  const component = `
    export default function ${req.query.name || 'Component'}() {
      return <div>Hello from App Component</div>;
    }
  `;
  res.json({ component });
}
