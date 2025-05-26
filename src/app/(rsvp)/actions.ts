"use server";

export interface RsvpFormData {
  attendance: "confirm" | "decline";
  guestFullName: string; 
}

interface RsvpResponse {
  success: boolean;
  message: string;
}

export async function submitRsvp(formData: RsvpFormData): Promise<RsvpResponse> {
  // Simulate API call to an external service
  console.log("RSVP Submitted to external service:", formData);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Example: Always succeed for demo purposes
  // In a real app, you would handle potential errors from the external service
  if (formData.attendance === "confirm") {
    return { 
      success: true, 
      message: `Thank you, ${formData.guestFullName}! Your attendance is confirmed. We can't wait to celebrate with you!` 
    };
  } else {
    return { 
      success: true, 
      message: `Thank you for letting us know, ${formData.guestFullName}. We'll miss you!` 
    };
  }

  // Example of error handling:
  // try {
  //   // const response = await fetch('external-service-url', { method: 'POST', body: JSON.stringify(formData) });
  //   // if (!response.ok) throw new Error('Failed to submit RSVP');
  //   // return { success: true, message: "..." };
  // } catch (error) {
  //   console.error("RSVP Submission Error:", error);
  //   return { success: false, message: "An error occurred while submitting your RSVP. Please try again later." };
  // }
}
