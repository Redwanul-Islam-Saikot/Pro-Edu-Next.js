import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Topic.create({ title, description });

    return NextResponse.json(
      { message: "Topic created successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error creating topic" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const topics = await Topic.find();

    return NextResponse.json(topics, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching topics" },
      { status: 500 },
    );
  }
}
