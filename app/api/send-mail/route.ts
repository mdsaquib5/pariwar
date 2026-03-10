import nodemailer from "nodemailer";

export async function POST(req: Request) {

  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const isDistributor = body.message === 'New Distributor Application';
    const subject = isDistributor ? "New Distributor Deep Pariwar Application" : "New Contact Inquiry - Deep Pariwar";

    const htmlTemplate = `
          <html>
          <body style="font-family: 'Montserrat', sans-serif; background-color: #FDF8F3; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 1px solid #E4B44C;">
              <div style="background: #A61E22; padding: 40px; text-align: center; border-bottom: 5px solid #E4B44C;">
                <h1 style="color: white; margin: 0; font-size: 28px; letter-spacing: 3px; text-transform: uppercase;">DEEP PARIWAR</h1>
              </div>
              <div style="padding: 40px;">
                <div style="display: inline-block; background: #E4B44C; color: white; padding: 6px 16px; border-radius: 50px; font-size: 12px; font-weight: 800; margin-bottom: 25px; letter-spacing: 1px;">
                  ${isDistributor ? 'DISTRIBUTOR FORM' : 'GENERAL INQUIRY'}
                </div>
                
                <h2 style="color: #A61E22; border-bottom: 1px solid #E4B44C; padding-bottom: 10px; margin-bottom: 25px; font-size: 18px;">Submission Details</h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; color: #666; font-weight: bold; width: 140px;">Full Name:</td>
                    <td style="padding: 12px 0; color: #111;">${body.name || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #666; font-weight: bold;">Email:</td>
                    <td style="padding: 12px 0; color: #A61E22; font-weight: 500;">${body.email || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #666; font-weight: bold;">Phone:</td>
                    <td style="padding: 12px 0; color: #111;">${body.phone || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #666; font-weight: bold;">Location:</td>
                    <td style="padding: 12px 0; color: #111;">${body.city || 'N/A'}, ${body.state || 'N/A'}</td>
                  </tr>
                </table>

                <div style="margin-top: 35px;">
                  <h2 style="color: #A61E22; font-size: 18px; margin-bottom: 15px;">Message</h2>
                  <div style="background: #fafafa; padding: 25px; border-radius: 8px; border-left: 5px solid #A61E22; color: #333; line-height: 1.8;">
                    ${body.message || 'No additional message provided.'}
                  </div>
                </div>
              </div>
              <div style="background: #1F1F1F; padding: 30px; text-align: center; color: #999; font-size: 12px;">
                <p style="margin-bottom: 10px;">&copy; 2026 Deep Pariwar. All Rights Reserved.</p>
                <p>Designed for excellence in premium quality.</p>
              </div>
            </div>
          </body>
          </html>
        `;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "mdsaquib5540@gmail.com",
      subject: subject,
      html: htmlTemplate,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ success: false, error: (error as Error).message });
  }
}
