import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { from, to, fromDate, toDate, budget, travellers } = req.body;

    // Validate required fields
    if (!from || !to || !fromDate || !toDate) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Create a prompt for OpenAI
    const prompt = `You are a helpful travel assistant. Based on the following trip details, provide:
1. Weather forecast for the destination
2. Flight recommendations
3. Hotel recommendations

Trip Details:
- From: ${from}
- To: ${to}
- Departure Date: ${fromDate}
- Return Date: ${toDate}
- Budget: ${budget || "flexible"}
- Number of Travelers: ${travellers || 1}

Please provide recommendations in JSON format with these keys:
{
  "weather": "brief weather forecast",
  "flights": "flight recommendation",
  "hotel": "hotel recommendation"
}

Keep responses concise and practical.`;

    const message = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    // Parse the response
    const content = message.choices[0].message.content;

    // Try to extract JSON from the response
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    let recommendations;

    if (jsonMatch) {
      recommendations = JSON.parse(jsonMatch[0]);
    } else {
      // Fallback if JSON parsing fails
      recommendations = {
        weather: content,
        flights: "Unable to generate flight recommendations at this time",
        hotel: "Unable to generate hotel recommendations at this time",
      };
    }

    res.status(200).json(recommendations);
  } catch (error) {
    console.error("OpenAI API error:", error);

    // Return a user-friendly error message
    res.status(500).json({
      error: "Failed to generate recommendations",
      message: error.message,
    });
  }
}
