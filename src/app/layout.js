import CustomCursor from '../components/CustomCursor/CustomCursor' // Ensure path is correct
import './globals.css'
// ... other imports (like fonts, etc.)

export const metadata = {
  title: 'Your Portfolio Title', // Add your title
  description: 'Your portfolio description', // Add your description
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CustomCursor /> {/* Ensure this is present */}
      </body>
    </html>
  )
}