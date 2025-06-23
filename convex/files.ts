import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { action } from "./_generated/server";

// 1. Buat URL upload untuk frontend
export const generateUploadUrl = mutation(async ({ storage }) => {
  return await storage.generateUploadUrl();
});

// 2. (opsional) Ambil file yang diupload
export const getFileUrl = action({
  args: { storageId: v.string() },
  handler: async (ctx, args) => {
    const url = await ctx.storage.getUrl(args.storageId);
    return url;
  },
});
