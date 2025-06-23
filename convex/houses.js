// convex/houses.js
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// 1️⃣ Pengajuan rumah baru oleh user
export const submitHouse = mutation({
  args: {
    user_id: v.id("users"),
    certificate_type: v.string(),
    nib: v.string(),
    village_number: v.string(),
    owner_birth_date: v.string(),
    origin_rights: v.string(),
    issuance_basis: v.string(),
    land_area: v.string(),
    room_info: v.string(),
    rt: v.string(),
    rw: v.string(),
    village: v.string(),
    district: v.string(),
    city: v.string(),
    province: v.string(),
    certificate_pdf_url: v.string(),
    house_image_url: v.string()
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("houses", {
      ...args,
      is_approved: false,
      created_at: new Date().toISOString()
    });
  }
});

// 2️⃣ Query semua rumah yang sudah disetujui
export const getApprovedHouses = query({
  handler: async (ctx) => {
    return await ctx.db.query("houses")
      .filter((q) => q.eq(q.field("is_approved"), true))
      .collect();
  }
});

// 3️⃣ Admin menyetujui rumah
export const approveHouse = mutation({
  args: {
    house_id: v.id("houses"),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.house_id, {
      is_approved: true,
    });
  }
});
