import connectDB from "@/lib/mongodb";
import User from "@/models/user";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { artistsName, email, password } = body;

    if (!artistsName || !email || !password) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
      });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: "Email already registered" }), {
        status: 400,
      });
    }

    // Create new user
    const newUser = new User({
      artistsName,
      email,
      password, // ⚠️ Later you should hash this password with bcrypt
    });

    await newUser.save();

    return new Response(
      JSON.stringify({ message: "User created successfully", user: newUser }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup Error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}
