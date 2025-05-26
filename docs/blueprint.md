# **App Name**: Forever Bloom

## Core Features:

- Wedding Details Display: Display wedding details (date, time, location, and guest allowance) upon successful validation of the invitation.
- JWT Validation: Implement a URL parameter (id) check for a valid JWT to authenticate guests and personalize the invitation.
- RSVP Button: Show a confirmation button for guests to RSVP, based on the invitation's confirmation status and expiration date.
- Personalized Welcome: Personalized welcome message including guest's full name.
- Error Handling: If JWT is invalid, expired, or missing, display an error message: "The invitation link is broken or invalid. Please contact the couple."
- Attendance Form: Simple form to confirm or decline attendance, which calls an external service. Do not store any user data on the client side.

## Style Guidelines:

- Primary color: Soft, muted rose (#E0B1CB) to evoke romance and tenderness.
- Background color: Very light desaturated pink (#F8F5F7), almost white, providing a gentle and calming backdrop.
- Accent color: Muted lavender (#C4B0D3) to add a touch of elegance and complement the rose and background colors.
- Elegant, cursive typography for titles and headings to reinforce the romantic theme.
- Clean, readable sans-serif font for body text to ensure clarity and accessibility.
- Delicate floral icons and subtle leaf patterns used as decorative elements.
- Use of decorative arches made of plants around key content areas, with white flowers and green leaves predominantly.
- Subtle fade-in animations upon page load and for interactive elements (e.g., the RSVP button).