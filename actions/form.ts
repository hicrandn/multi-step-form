"use server"

export async function submitApplication(formData: any) {
  try {
    const response = await fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Job Application",
        body: formData,
        userId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit application.");
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}
