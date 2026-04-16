interface Env {
  RESEND_API_KEY: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const body = await request.json() as Record<string, string>;
    const { name, email, phone, service, movingDate, fromPostcode, toPostcode, message } = body;

    if (!name || !email || !phone) {
      return new Response(JSON.stringify({ error: 'Name, email, and phone are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Please enter a valid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Man With A Van Sheffield <quotes@manwithavansheffield.co.uk>',
        to: ['contact@manwithavansheffield.co.uk'],
        reply_to: email,
        subject: `New Quote Request from ${name}`,
        html: `
          <h2>New Quote Request — Man With A Van Sheffield</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;width:140px">Name</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Service</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(service || 'Not specified')}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Moving Date</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(movingDate || 'Not specified')}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">From Postcode</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(fromPostcode || 'Not specified')}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">To Postcode</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(toPostcode || 'Not specified')}</td></tr>
          </table>
          ${message ? `<h3 style="margin-top:20px">Additional Details</h3><p style="white-space:pre-wrap">${escapeHtml(message)}</p>` : ''}
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Resend API error:', errorText);
      return new Response(JSON.stringify({ error: 'Failed to send message. Please try again or call us directly.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(JSON.stringify({ error: 'Something went wrong. Please try again or call us directly.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
