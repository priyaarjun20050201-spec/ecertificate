# Certificate Generation Web App - Prototype

This is a React-based prototype of the Certificate Generation Web App. It implements the UI/UX flow described in the design requirements.

## Project Structure

- **Landing Page**: Hero section and pricing cards.
- **Dashboard**: A 5-step wizard for creating certificates (Design, Upload, Attendee Data, Payment, Generation).
- **Access Page**: For attendees to view their certificates using a code.
- **Admin Dashboard**: For organizers to manage batches.

## Technology Stack

- **React**: Frontend framework (bootstrapped with Vite).
- **Tailwind CSS**: Utility-first CSS framework for styling (configured with custom color palette).
- **React Router**: For client-side routing.
- **Lucide React**: For icons.

## How to Run

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  Build for production:
    ```bash
    npm run build
    ```

## WordPress Implementation Notes

While this is a React SPA, the logic and design can be ported to a WordPress environment as requested:

-   **Frontend**: The Tailwind classes can be used in a custom WordPress theme or mapped to Elementor widgets.
-   **Backend**: The mock data in the React components (e.g., `batches` in AdminDashboard, `certificate` in AccessPage) should be replaced with API calls to a PHP backend.
-   **Plugins**:
    -   Use a custom post type for `Certificates` and `Batches`.
    -   Use WP Mail SMTP for email delivery.
    -   Integrate Paystack/Flutterwave plugins for the payment step.
