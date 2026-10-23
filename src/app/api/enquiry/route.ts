import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, project, message, hp_company } = body;

    // Honeypot check: if hidden field is filled, silently reject/ignore spam bot
    if (hp_company) {
      console.warn("Spam honeypot triggered by submission:", { name, email });
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    // Server-side validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields (Name, Email, Phone)." },
        { status: 400 }
      );
    }

    // In a production environment with a configured CRM (e.g. HubSpot, Salesforce, or Zoho),
    // this endpoint forwards the payload securely using environment variables (e.g. CRM_API_KEY).
    // For now, we log the enquiry in structured format and return a confirmed success state.
    console.log("=== [Ahmadyar Developments - New Client Lead] ===", {
      timestamp: new Date().toISOString(),
      lead: {
        name,
        email,
        phone,
        project: project || "General Portfolio Enquiry",
        message: message || "No custom message provided",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been successfully registered. An Ahmadyar representative will contact you shortly.",
      leadId: `AHM-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    console.error("Error processing enquiry submission:", error);
    return NextResponse.json(
      { success: false, message: "An internal server error occurred while processing your request." },
      { status: 500 }
    );
  }
}
