import './globals.css'

export const metadata = {
  title: 'COSMIC RAG - EU Research Analytics',
  description: 'Cognitive extraction from 27 vault files | 96.3% success with local AI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
