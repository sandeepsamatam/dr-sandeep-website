import { google } from "googleapis";

export async function addToSheet(data: any) {
  try {
    console.log("📩 Sending to Google Sheets:", data);

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:E", // ⚠️ We may change this next
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          data.name,
          data.phone,
          data.problem,
          data.message,
          new Date().toLocaleString(),
        ]],
      },
    });

    console.log("✅ Success:", response.status);
  } catch (error) {
    console.error("❌ SHEETS ERROR:", error);
    throw error;
  }
}