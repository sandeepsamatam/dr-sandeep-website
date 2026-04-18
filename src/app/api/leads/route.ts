import { NextResponse } from "next/server";
import { addToSheet } from "@/lib/sheets";

function normalizeLead(body: any) {
  const name = body.name?.trim() || "";
  const phone = body.phone?.trim() || "";
  const problem = body.problem?.trim() || "";
  const message = body.message?.trim() || "";

  const digitsOnlyPhone = phone.replace(/\D/g, "");

  if (name.length < 2) {
    return { error: "Please enter a valid name." };
  }

  if (digitsOnlyPhone.length < 10 || digitsOnlyPhone.length > 15) {
    return { error: "Please enter a valid phone number." };
  }

  if (problem.length < 3) {
    return { error: "Please mention the health problem." };
  }

  return {
    data: { name, phone, problem, message }
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = normalizeLead(body);

    if ("error" in parsed) {
      return NextResponse.json({ message: parsed.error }, { status: 422 });
    }

    console.log("📩 Lead:", parsed.data);

    await addToSheet(parsed.data);

    return NextResponse.json(
      { message: "Lead saved successfully." },
      { status: 200 }
    );

  } catch (error) {
    console.error("❌ FULL ERROR:", error);

    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}