
import { NextResponse } from "next/server";
import { getPublishedPosts } from "@/lib/supabase/posts";

export async function GET() {
  try {
    const posts = await getPublishedPosts();

    return NextResponse.json({
      success: true,
      total: posts.length,
      posts,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Erro desconhecido",
      },
      { status: 500 }
    );
  }
}
