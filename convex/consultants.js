// convex/consultants.js
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// 1️⃣ User daftar jadi konsultan
export const registerConsultant = mutation({
  args: {
    user_id: v.id("users"),
    certificate_number: v.string(),
    training_place_name: v.string(),
    bank_account_number: v.string(),
    certificate_pdf_url: v.string(),
    photo_profile_url: v.string()
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("consultants", {
      ...args,
      is_approved: false,
      created_at: new Date().toISOString()
    });
  }
});

// 2️⃣ Admin menyetujui konsultan
export const approveConsultant = mutation({
  args: {
    consultant_id: v.id("consultants"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.consultant_id, {
      is_approved: true,
    });
  }
});

// 3️⃣ Ambil semua konsultan berdasarkan kota tertentu dan sudah disetujui
export const getConsultantsByCity = query({
  args: {
    city: v.string(),
  },
  handler: async (ctx, args) => {
    // Join ke tabel users untuk cari kota
    const users = await ctx.db.query("users")
      .filter((q) => q.and(
        q.eq(q.field("city"), args.city),
        q.eq(q.field("role"), "consultant")
      ))
      .collect();

    const userIds = users.map((u) => u._id);

    const consultants = await ctx.db.query("consultants")
      .filter((q) => q.and(
        q.in(q.field("user_id"), userIds),
        q.eq(q.field("is_approved"), true)
      ))
      .collect();

    return consultants;
  }
});
