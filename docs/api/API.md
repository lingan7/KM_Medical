# API Documentation

## Overview
This document outlines the API integrations used in the KM Medical Device Consulting application.

## Email Service (EmailJS)

The application uses EmailJS for handling contact form submissions without a backend server.

### Configuration

```typescript
// Example configuration in your component
import emailjs from '@emailjs/browser';

const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;
```

### Send Email

**Endpoint**: `emailjs.sendForm(serviceId, templateId, form, publicKey)`

**Parameters**:
- `serviceId` (string): Your EmailJS service ID
- `templateId` (string): Your EmailJS template ID
- `form` (HTMLFormElement): The form element containing the email data
- `publicKey` (string): Your EmailJS public key

**Example Usage**:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const result = await emailjs.sendForm(
      serviceId,
      templateId,
      e.currentTarget as HTMLFormElement,
      publicKey
    );
    
    console.log('Email sent successfully!', result.text);
    // Handle success (e.g., show success message)
  } catch (error) {
    console.error('Failed to send email:', error);
    // Handle error
  }
};
```

## Environment Variables

| Variable Name | Description | Required |
|--------------|-------------|----------|
| `VITE_APP_EMAILJS_SERVICE_ID` | Your EmailJS service ID | Yes |
| `VITE_APP_EMAILJS_TEMPLATE_ID` | Your EmailJS template ID | Yes |
| `VITE_APP_EMAILJS_PUBLIC_KEY` | Your EmailJS public key | Yes |

## Error Handling

### Common Errors

1. **Missing Environment Variables**
   - **Error**: "EmailJS service ID is not defined"
   - **Solution**: Ensure all required environment variables are set in your `.env` file

2. **Network Errors**
   - **Error**: "Network Error"
   - **Solution**: Check internet connection and CORS settings

3. **Invalid Template**
   - **Error**: "Template not found"
   - **Solution**: Verify the template ID matches your EmailJS template

## Rate Limiting

- EmailJS has rate limits based on your subscription plan
- Free tier: 200 emails/day, 50,000 emails/month
- Monitor your usage in the EmailJS dashboard

## Testing

### Unit Tests

Test your email functionality with mock implementations:

```typescript
// __mocks__/emailjs.ts
const emailjs = {
  sendForm: jest.fn(() => Promise.resolve({ status: 200, text: 'OK' })),
};

export default emailjs;
```

### Integration Tests

Test the form submission flow:

```typescript
// Example test using React Testing Library
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from '../ContactForm';

jest.mock('@emailjs/browser');

describe('ContactForm', () => {
  it('sends email when form is submitted', async () => {
    render(<ContactForm />);
    
    // Fill out form
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: 'Test message' },
    });
    
    // Submit form
    fireEvent.click(screen.getByText(/send message/i));
    
    // Verify email was sent
    await waitFor(() => {
      expect(emailjs.sendForm).toHaveBeenCalled();
    });
  });
});
```

## Security Considerations

1. **API Keys**
   - Never commit API keys to version control
   - Use environment variables for all sensitive data
   - Regenerate API keys if they are compromised

2. **Input Validation**
   - Validate all form inputs on the client side
   - Implement server-side validation if backend is added
   - Sanitize user input to prevent XSS attacks

3. **HTTPS**
   - Always use HTTPS in production
   - Enable HSTS (HTTP Strict Transport Security)
   - Use secure cookies if implementing authentication

## Changelog

### v1.0.0 (2023-11-01)
- Initial implementation of contact form with EmailJS integration
- Added environment variable configuration
- Basic error handling and user feedback

### v1.1.0 (2023-12-01)
- Added input validation
- Improved error messages
- Added loading states during form submission
