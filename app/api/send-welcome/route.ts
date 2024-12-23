import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, whatsappNumber } = await req.json();
    
    // Format the WhatsApp number (remove any spaces or special characters)
    const formattedNumber = whatsappNumber.replace(/\D/g, "");
    
    // Create the welcome message
    const message = `Welcome to Asian Kids Dance Crew, ${name}! 🎉\n\nWe're excited to have you join our dance family. Get ready for an amazing journey of dance and creativity!\n\nFor any queries, feel free to reach out to us.\n\nBest regards,\nAsian Kids Dance Crew Team`;
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${formattedNumber}&text=${encodeURIComponent(message)}`;
    
    // In a production environment, you would use the WhatsApp Business API
    // For now, we'll return the URL that can be used to send the message manually
    return NextResponse.json({ whatsappUrl });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}