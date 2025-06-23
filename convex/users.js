import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const saveUser = mutation({
  args: {
    userId: v.string(),
    email: v.string(),
    name: v.string(),
    nik: v.string(),
    ktp_image_url: v.string(),
    role: v.union(v.literal("user"), v.literal("consultant"), v.literal("admin")),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", {
      userId: args.userId,
      email: args.email,
      name: args.name,
      nik: args.nik,
      ktp_image_url: args.ktp_image_url,
      role: args.role,
      is_verified: false,
      created_at: new Date().toISOString()
    });
  }
});
