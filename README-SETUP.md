# Fit Friendly Website

A modern Next.js fitness website with client registration and admin panel.

## Features

- Modern, responsive design with off-white color theme
- Client registration form with validation
- MongoDB integration for data storage
- Admin panel to view client data
- WhatsApp integration for direct communication
- Single-page application with beautiful UI

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fit-friendly-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add:
```
MONGODB_URI=mongodb://localhost:27017/Fit-Friendly
```

For MongoDB Atlas (cloud), use:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/Fit-Friendly
```

4. Start MongoDB (if using local installation):
```bash
mongod
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Main Website
- Visit `/` to see the main fitness website
- Fill out the registration form to sign up clients
- Click "Chat on WhatsApp" to start a conversation

### Admin Panel
- Visit `/admin` to view all registered clients
- View client details in a formatted table
- Click "Back to Main Site" to return to the homepage

## Database Structure

The application uses MongoDB with the following structure:
- Database: `Fit-Friendly`
- Collection: `clint-details`
- Document fields:
  - `name`: String (required)
  - `lastName`: String (required)
  - `phoneNumber`: String (required)
  - `age`: Number (required)
  - `city`: String (required)
  - `height`: Number (required, in cm)
  - `weight`: Number (required, in kg)
  - `createdAt`: Date (auto-generated)

## API Endpoints

- `POST /api/clients` - Register a new client
- `GET /api/clients` - Get all clients (for admin panel)

## Customization

### Colors
The website uses an off-white color theme. You can customize colors in `tailwind.config.js`:
```javascript
colors: {
  'off-white': '#faf9f8',
  'warm-gray': '#8b7355',
  'accent-blue': '#3b82f6',
  'accent-green': '#10b981',
}
```

### WhatsApp Link
Update the WhatsApp link in `src/app/page.tsx`:
```javascript
href="https://wa.me/message/XTWWCIVN2JFBG1"
```

### Content
Modify the website content in `src/app/page.tsx` to match your business needs.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- Heroku
- AWS
- DigitalOcean

## Troubleshooting

1. **MongoDB Connection Issues**: Ensure MongoDB is running and the connection string is correct
2. **Form Submission Errors**: Check browser console for API errors
3. **Build Errors**: Run `npm run build` to check for TypeScript errors

## Support

For support, please contact the development team or check the documentation.
