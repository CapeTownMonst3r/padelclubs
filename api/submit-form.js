export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      location,
      experience,
      heardAbout,
      other
    } = req.body;

    // Basic validation
    if (!name || !email) {
      return res.status(400).json({ 
        error: 'Name and email are required' 
      });
    }

    // Log the form submission (in production, you'd save to database)
    console.log('New padel registration:', {
      name,
      email,
      phone,
      location,
      experience,
      heardAbout,
      other,
      timestamp: new Date().toISOString()
    });

    // Here you could:
    // 1. Save to database (Airtable, Supabase, MongoDB, etc.)
    // 2. Send email notification (SendGrid, Resend, etc.)
    // 3. Add to CRM (HubSpot, Salesforce, etc.)
    
    // For now, we'll just return success
    return res.status(200).json({ 
      success: true,
      message: 'Registration received successfully!',
      data: {
        name,
        email,
        phone,
        location,
        experience,
        heardAbout,
        other
      }
    });

  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      message: 'Failed to process registration'
    });
  }
}
